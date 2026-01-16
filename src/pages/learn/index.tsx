
import { Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { translations } from '../../translations'
import { Language, WordEntry } from '../../types'

import { StorageService } from '../../services/storage'

// ...

export default function Learn() {
  const [words, setWords] = useState<WordEntry[]>([])
  // Default to English for now, ideally from global store
  const [language, setLanguage] = useState<Language>('en')
  const [activeId, setActiveId] = useState<string | null>(null)

  useDidShow(() => {
    const stored = Taro.getStorageSync('language') as Language
    if (stored) {
      setLanguage(stored)
      const currentT = translations[stored]
      Taro.setNavigationBarTitle({ title: currentT.learn })
    } else {
      Taro.setNavigationBarTitle({ title: translations['en'].learn })
    }
    
    setWords(StorageService.getWords())
  })
  const t = translations[language]

  const playAudio = (text: string, id: string) => {
    setActiveId(id)
    const innerAudioContext = Taro.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${text}&type=2`
    
    setTimeout(() => {
        setActiveId(null)
    }, 2000)

    innerAudioContext.onPlay(() => {
      console.log('Start playing audio')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }

  return (
    <View className="p-4 space-y-6 pb-24 text-white min-h-screen bg-background-dark" style={{ padding: '16px', paddingBottom: '96px', minHeight: '100vh', backgroundColor: '#0d1117' }}>
      <View className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <View className="p-4 rounded-lg bg-surface-dark border border-border-dark" style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#161b22', border: '1px solid #30363d' }}>
          <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1" style={{ fontSize: '10px', fontWeight: 'bold', color: '#8b949e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>{t.accuracy}</Text>
          <View className="flex items-end gap-2" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Text className="text-2xl font-bold text-white" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>94%</Text>
            <Text className="text-xs text-primary font-medium mb-1" style={{ fontSize: '12px', color: '#13ec6d', fontWeight: '500', marginBottom: '4px' }}>+2%</Text>
          </View>
        </View>
        <View className="p-4 rounded-lg bg-surface-dark border border-border-dark" style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#161b22', border: '1px solid #30363d' }}>
          <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1" style={{ fontSize: '10px', fontWeight: 'bold', color: '#8b949e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>{t.level}</Text>
          <View className="flex items-end gap-2" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <Text className="text-2xl font-bold text-white" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>B2</Text>
            <Text className="text-xs text-gray-400 mb-1" style={{ fontSize: '12px', color: '#8b949e', marginBottom: '4px' }}>Adv.</Text>
          </View>
        </View>
      </View>

      <View className="space-y-3" style={{ marginBottom: '12px' }}>
        <View className="flex items-center justify-between px-1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '4px', paddingRight: '4px', marginBottom: '12px' }}>
          <Text className="text-lg font-bold text-white" style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>{t.review}</Text>
          <View className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-800 border border-border-dark" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '999px', backgroundColor: '#1f2937', border: '1px solid #30363d' }}>
            <Text className="text-gray-400 text-xs font-bold uppercase" style={{ color: '#9ca3af', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>{t.dailyMix}</Text>
          </View>
        </View>

        <View className="flex flex-col gap-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {words.map(word => (
            <View 
              key={word.id} 
              onClick={() => playAudio(word.word, word.id)}
              className={`flex flex-col gap-2 rounded-xl border p-4 transition-all duration-300 ${activeId === word.id ? 'bg-primary-10 border-primary' : 'bg-surface-dark border-white/5'}`}
              style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  borderRadius: '12px', 
                  padding: '16px',
                  backgroundColor: activeId === word.id ? 'rgba(19, 236, 109, 0.1)' : '#161b22',
                  border: activeId === word.id ? '1px solid #13ec6d' : '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease'
              }}
            >
              <View className="flex flex-row items-start justify-between" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View className="flex flex-row items-baseline gap-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '8px' }}>
                  <Text className={`text-lg font-bold ${activeId === word.id ? 'text-primary' : 'text-white'}`} style={{ fontSize: '18px', fontWeight: 'bold', color: activeId === word.id ? '#13ec6d' : '#fff' }}>{word.word}</Text>
                  <Text className="font-mono text-xs text-gray-400" style={{ fontFamily: 'monospace', fontSize: '12px', color: '#8b949e' }}>{word.phonetic}</Text>
                </View>
                <View 
                  onClick={(e) => { e.stopPropagation(); playAudio(word.word, word.id); }}
                  className={`flex items-center justify-center size-7 rounded-full ${activeId === word.id ? 'bg-primary text-background-dark' : 'bg-white/5 text-gray-400'}`}
                  style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%',
                      backgroundColor: activeId === word.id ? '#13ec6d' : 'rgba(255,255,255,0.05)',
                      color: activeId === word.id ? '#0d1117' : '#8b949e'
                  }}
                >
                  <Text className="text-sm" style={{ fontSize: '14px', color: 'inherit' }}>🔊</Text>
                </View>
              </View>
              <Text className="text-xs text-gray-300 mt-1" style={{ fontSize: '12px', color: '#d0d7de', marginTop: '4px', lineHeight: '1.5' }}>{word.definition}</Text>
              {word.chineseDefinition && <Text className="text-xs text-gray-400 mt-0.5" style={{ fontSize: '12px', color: '#8b949e', marginTop: '2px', lineHeight: '1.5' }}>{word.chineseDefinition}</Text>}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
