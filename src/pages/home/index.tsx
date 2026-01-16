
import { Button, Image, Text, View } from '@tarojs/components'; // Standard Taro components
import Taro, { useDidShow, useLoad } from '@tarojs/taro'
import { useState } from 'react'
import ContributionGraph from '../../components/ContributionGraph'
import { translations } from '../../translations'
import { Language, WordEntry } from '../../types'

import { MOCK_WORDS } from '../../data'


export default function Home() {
  const [words, setWords] = useState<WordEntry[]>(MOCK_WORDS)
  const [language, setLanguage] = useState<Language>('en')
  const [streak] = useState(5)
  const [activeId, setActiveId] = useState<string | null>(null)
  
  const t = translations[language];

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    const stored = Taro.getStorageSync('language')
    if (stored) {
      setLanguage(stored as Language)
    }
  })

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
    })
  }

  const navigateToLearn = () => {
    Taro.switchTab({ url: '/pages/learn/index' })
  }

  const navigateToHistory = () => {
    Taro.switchTab({ url: '/pages/history/index' })
  }
  
  const navigateToNewEntry = () => {
      Taro.navigateTo({ url: '/pages/new-entry/index' })
  }

  return (
    <View className="bg-background-dark min-h-screen p-4 pb-24" style={{ minHeight: '100vh', padding: '16px', paddingBottom: '96px', backgroundColor: '#0d1117' }}>
      {/* Header */}
      <View className="flex flex-row items-center justify-between mb-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <View className="flex flex-row items-center gap-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
          <View className="relative" style={{ position: 'relative' }}>
            <Image 
                className="size-10 rounded-full border-2 border-white/10" 
                src="https://picsum.photos/seed/learner/100" 
                style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)' }}
            />
            <View className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-primary border-2 border-background-dark" style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#13ec6d', border: '2px solid #0d1117' }}></View>
          </View>
          <View>
            <Text className="text-xs font-medium text-gray-400 block" style={{ fontSize: '12px', color: '#8b949e', display: 'block' }}>{t.welcome}</Text>
            <Text className="text-sm font-bold leading-tight text-white block" style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', display: 'block' }}>{t.learner}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-1 rounded-full bg-white/5 border border-white/5 px-3 py-1.5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '999px', padding: '6px 12px' }}>
          <Text className="text-orange-500 text-lg" style={{ color: '#f97316', fontSize: '18px' }}>🔥</Text>
          <Text className="text-sm font-bold text-white" style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>{streak}</Text>
        </View>
      </View>

      {/* Activity - Shrunken */}
      <View className="bg-surface-dark border border-white/5 rounded-xl p-3 shadow-sm mb-6" style={{ backgroundColor: '#161b22', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', marginBottom: '24px' }}>
        <View className="flex flex-row items-center justify-between mb-2 px-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <Text className="text-xs font-bold text-gray-400 uppercase" style={{ fontSize: '12px', fontWeight: 'bold', color: '#8b949e', textTransform: 'uppercase' }}>{t.activity}</Text>
          <Text className="text-xs text-gray-500" style={{ fontSize: '10px', color: '#6b7280' }}>{t.last30Days}</Text>
        </View>
        <ContributionGraph />
      </View>

      {/* Add Word Button - New */}
      <View className="mb-6" style={{ marginBottom: '24px' }}>
        <Button 
          onClick={navigateToNewEntry}
          className="w-full flex flex-row items-center justify-center gap-2 rounded-xl bg-primary-10 border border-primary-20 h-14 text-primary font-bold"
          style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px', backgroundColor: 'rgba(19, 236, 109, 0.1)', border: '1px solid rgba(19, 236, 109, 0.2)', height: '56px', color: '#13ec6d', fontWeight: 'bold' }}
        >
          <Text style={{ fontSize: '24px', marginRight: '4px' }}>+</Text>
          {t.addWord}
        </Button>
      </View>

      {/* Recently Added */}
      <View>
        <View className="flex flex-row items-center justify-between mb-4 px-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Text className="text-sm font-bold uppercase tracking-wide text-gray-400" style={{ fontSize: '14px', fontWeight: 'bold', color: '#8b949e', textTransform: 'uppercase' }}>{t.recentlyAdded}</Text>
          <Text onClick={navigateToHistory} className="text-xs text-primary font-semibold" style={{ fontSize: '12px', color: '#13ec6d', fontWeight: '600' }}>{t.viewAll}</Text>
        </View>
        <View className="flex flex-col gap-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {words.slice(0, 3).map(word => (
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
                <View>
                  <Text className={`text-lg font-bold mb-0.5 block ${activeId === word.id ? 'text-primary' : 'text-white'}`} style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2px', display: 'block', color: activeId === word.id ? '#13ec6d' : '#fff' }}>{word.word}</Text>
                  <Text className="font-mono text-xs text-gray-400 block" style={{ fontFamily: 'monospace', fontSize: '12px', color: '#8b949e', display: 'block' }}>{word.phonetic}</Text>
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
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}
