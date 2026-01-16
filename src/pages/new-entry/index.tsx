import { Button, Input, Text, Textarea, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { fetchWordDetails } from '../../services/gemini'
import { translations } from '../../translations'
import { Language } from '../../types'

export default function NewEntry() {
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState('')
  const [phonetic, setPhonetic] = useState('')
  const [example, setExample] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('Noun')
  const [labels, setLabels] = useState<string[]>(['vocabulary', 'learning'])
  const [isFetching, setIsFetching] = useState(false)
  const [language] = useState<Language>('en')
  
  const t = translations[language]

  const handleFetchAI = async () => {
    if (!word) return
    setIsFetching(true)
    try {
      const details = await fetchWordDetails(word)
      setPhonetic(details.phonetic || '')
      setDefinition(details.definition || '')
      setExample(details.example || '')
      setPartOfSpeech(details.partOfSpeech || 'Noun')
      setLabels(details.labels || ['vocabulary', 'learning'])
    } catch (e) {
      console.error(e)
      Taro.showToast({ title: 'AI Fetch Failed', icon: 'none' })
    } finally {
      setIsFetching(false)
    }
  }

  const navigateBack = () => {
    Taro.navigateBack()
  }

  const handleCommit = () => {
     // TODO: Save data
     Taro.showToast({ title: 'Saved!', icon: 'success' })
     setTimeout(() => Taro.navigateBack(), 1000)
  }

  return (
    <View className="flex flex-col min-h-screen bg-background-dark pb-10">
      <View className="flex flex-row items-center bg-background-dark/80 backdrop-blur-md p-4 border-b border-border-dark sticky top-0 z-10">
        <Button onClick={navigateBack} className="text-text-secondary size-10 flex items-center justify-center bg-transparent border-0 p-0 m-0 leading-none">
          <Text className="text-lg">✕</Text>
        </Button>
        <Text className="text-lg font-semibold flex-1 text-center pr-10 text-white">{t.newEntry}</Text>
      </View>

      <View className="flex-1 p-6 flex flex-col gap-6">
        <View className="flex flex-col gap-2">
          <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-1 block">{t.word}</Text>
          <View className="relative">
            <Input 
              value={word}
              onInput={(e) => setWord(e.detail.value)}
              className="w-full rounded-md bg-surface-dark border border-border-dark text-white placeholder-text-secondary-50 h-12 px-4 font-mono text-lg box-border" 
              placeholder="e.g. Ephemeral"
              placeholderStyle="color: #8b949e"
            />
            <View 
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                style={{ top: '50%', transform: 'translateY(-50%)', right: '12px', position: 'absolute' }}
            >
                <Button 
                onClick={handleFetchAI}
                disabled={isFetching || !word}
                className="text-[10px] text-primary font-mono border border-primary-30 rounded px-1.5 py-0.5 bg-primary-10 m-0 leading-normal min-h-0 flex items-center"
                style={{ backgroundColor: 'rgba(19, 236, 109, 0.1)', borderColor: 'rgba(19, 236, 109, 0.3)', color: '#13ec6d' }}
                >
                <Text>{isFetching ? t.fetching : t.fetchingAI}</Text>
                </Button>
            </View>
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <View className="flex flex-row items-center justify-between pl-1">
            <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider">{t.definition}</Text>
          </View>
          <Textarea 
            value={definition}
            onInput={(e) => setDefinition(e.detail.value)}
            className="w-full h-[120px] rounded-md bg-surface-dark border border-border-dark text-white p-4 font-mono text-sm leading-relaxed box-border" 
            placeholder="Add a detailed description..."
            placeholderStyle="color: #8b949e"
            maxlength={-1}
          />
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-1">{t.exampleSentence}</Text>
          <Textarea 
            value={example}
            onInput={(e) => setExample(e.detail.value)}
            className="w-full h-[80px] rounded-md bg-surface-dark border border-border-dark text-white p-3 font-mono text-sm leading-relaxed box-border" 
            placeholder="Used in a sentence..."
            placeholderStyle="color: #8b949e"
             maxlength={-1}
          />
        </View>

        <View className="flex flex-col gap-3 pt-2">
          <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider border-b border-border-dark pb-2 block">{t.labels}</Text>
          <View className="flex flex-row flex-wrap gap-2">
            {labels.map(label => (
              <View key={label} className="flex flex-row items-center gap-1.5 rounded-full bg-surface-dark border border-border-dark px-3 py-1">
                <View className="size-1.5 rounded-full bg-primary" style={{ width: 6, height: 6, backgroundColor: '#13ec6d' }}></View>
                <Text className="text-[10px] font-bold text-white uppercase">{label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="bg-background-dark/95 backdrop-blur-md border-t border-border-dark p-4 pb-6">
        <Button 
          onClick={handleCommit}
          disabled={!word || !definition}
          className="w-full flex-row items-center justify-center gap-2 rounded-md bg-primary h-12 text-background-dark font-bold text-base"
          style={{ backgroundColor: '#13ec6d', color: '#0d1117', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text className="text-xl mr-2">✓</Text>
          <Text>{t.commitWord}</Text>
        </Button>
      </View>
    </View>
  )
}
