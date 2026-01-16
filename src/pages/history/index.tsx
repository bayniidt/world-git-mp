import { Image, Input, Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { StorageService, UserInfo } from '../../services/storage'
import { translations } from '../../translations'
import { Language, WordEntry } from '../../types'

export default function History() {
  const [words, setWords] = useState<WordEntry[]>([])
  const [language, setLanguage] = useState<Language>('en')
  const [userInfo, setUserInfo] = useState<UserInfo>(StorageService.getUserInfo())
  const [streak, setStreak] = useState(5) // Mock streak
  
  useDidShow(() => {
    const stored = Taro.getStorageSync('language') as Language
    if (stored) {
        setLanguage(stored)
        const currentT = translations[stored]
        Taro.setNavigationBarTitle({ title: currentT.history })
    } else {
        Taro.setNavigationBarTitle({ title: translations['en'].history })
    }

    setWords(StorageService.getWords())
    setUserInfo(StorageService.getUserInfo())
  })

  const t = translations[language]

  const goToSettings = () => {
    Taro.navigateTo({ url: '/pages/settings/index' })
  }

  return (
    <View className="bg-background-dark min-h-screen pb-24">
      {/* Header */}
      <View className="flex flex-row items-center justify-between px-4 py-3 sticky top-0 z-20 bg-background-dark border-b border-border-dark">
        <View className="flex flex-row items-center gap-3">
          <View className="flex items-center justify-center size-8 rounded-full bg-surface-dark border border-border-dark text-text-secondary">
            <Text className="text-lg font-bold">☰</Text>
          </View>
          <View>
            <Text className="text-base font-semibold leading-tight text-white block">vocab / {t.history.toLowerCase()}</Text>
            <Text className="text-sm text-text-secondary font-mono block">master</Text>
          </View>
        </View>
        <View 
          onClick={goToSettings}
          className="flex items-center justify-center size-8 rounded-md hover:bg-surface-dark"
        >
          <Text className="text-text-secondary text-lg">⚙️</Text>
        </View>
      </View>

      <View className="px-4 py-6 flex flex-col gap-6">
        <View className="grid grid-cols-2 gap-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <View className="p-3 rounded-lg border border-border-dark bg-surface-dark">
            <View className="flex flex-row items-center gap-2 text-text-secondary mb-1">
              <Text className="text-[18px]">🕒</Text>
              <Text className="text-xs font-bold uppercase tracking-wider">{t.commits}</Text>
            </View>
            <Text className="text-3xl font-bold text-white block">{words.length}</Text>
          </View>
          <View className="p-3 rounded-lg border border-border-dark bg-surface-dark">
            <View className="flex flex-row items-center gap-2 text-text-secondary mb-1">
              <Text className="text-[18px]">⚡</Text>
              <Text className="text-xs font-bold uppercase tracking-wider">{t.streak}</Text>
            </View>
            <Text className="text-3xl font-bold text-white block">{streak} <Text className="text-sm font-normal text-text-secondary">{t.days}</Text></Text>
          </View>
        </View>

        <View className="relative group">
          <View className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full justify-center" style={{ top: 0, bottom: 0, left: 0, paddingLeft: '12px', position: 'absolute', display: 'flex', alignItems: 'center', zIndex: 10 }}>
            <Text className="text-text-secondary text-lg">🔍</Text>
          </View>
          <Input 
            className="block w-full pl-10 pr-3 py-3 bg-surface-dark border border-border-dark rounded-md text-base font-mono placeholder-text-secondary text-white" 
            placeholder="Go to file..." 
            placeholderStyle="color: #8b949e"
            style={{ paddingLeft: '36px' }}
          />
          <View className="absolute inset-y-0 right-0 pr-3 flex items-center h-full justify-center" style={{ top: 0, bottom: 0, right: 0, paddingRight: '12px', position: 'absolute', display: 'flex', alignItems: 'center', zIndex: 10 }}>
            <Text className="border border-border-dark rounded px-1.5 py-0.5 text-xs text-text-secondary font-mono">⌘K</Text>
          </View>
        </View>

        <View className="border border-border-dark rounded-md overflow-hidden bg-surface-dark">
          <View className="flex flex-row items-center gap-2 px-4 py-3 bg-surface-dark border-b border-border-dark">
            <Image className="size-6 rounded-full" src={userInfo.avatarUrl} />
            <Text className="text-sm font-semibold text-white">{userInfo.nickName}</Text>
            <Text className="text-xs text-text-secondary truncate">feat: synced memory store</Text>
          </View>
          <View>
            {words.map(word => (
              <View key={word.id} className="group flex flex-row items-center gap-3 px-4 py-4 border-b border-border-dark last:border-0 hover:bg-[#1c2128]">
                <Text className="text-text-secondary text-xl">●</Text>
                <View className="flex-1 min-w-0">
                  <View className="flex flex-row items-center gap-2 mb-1">
                    <Text className="text-base font-bold text-white group-hover:text-primary">{word.word}</Text>
                    <View className="px-2 py-0.5 rounded-full border border-border-dark bg-background-dark">
                        <Text className="text-xs text-text-secondary">{word.partOfSpeech.slice(0, 3)}</Text>
                    </View>
                  </View>
                  <Text className="text-sm text-text-secondary truncate block">{word.definition}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}
