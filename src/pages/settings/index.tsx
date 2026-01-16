import { Text, View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import { translations } from '../../translations'
import { Language } from '../../types'

export default function Settings() {
  const [language, setLanguageState] = useState<Language>('en')
  
  const updateLanguageFromStorage = () => {
    const stored = Taro.getStorageSync('language') as Language
    if (stored) {
      console.log('Settings: syncing language from storage:', stored)
      setLanguageState(stored)
      updatePage(stored)
    }
  }

  const updatePage = (lang: Language) => {
    const t = translations[lang]
    if (!t) return

    // Update Title
    Taro.setNavigationBarTitle({ title: t.settings })
    
    // Update TabBar
    const tabs = [
        { index: 0, text: t.home },
        { index: 1, text: t.learn },
        { index: 2, text: t.history },
        { index: 3, text: t.settings }
    ]
    
    tabs.forEach(tab => {
        Taro.setTabBarItem({
            index: tab.index,
            text: tab.text,
            success: () => console.log(`Updated tab ${tab.index} to ${tab.text}`),
            fail: (err) => console.error(`Failed to update tab ${tab.index}:`, err)
        })
    })
  }

  useDidShow(() => {
    updateLanguageFromStorage()
  })

  // Also update when language is manually set
  const setLanguage = (l: Language) => {
    console.log('Settings: setting language to', l)
    setLanguageState(l)
    Taro.setStorageSync('language', l)
    updatePage(l)
    Taro.showToast({ title: 'Language updated', icon: 'success', duration: 1000 })
  }

  const t = translations[language]

  return (
    <View className="bg-background-dark min-h-screen pb-24">
      <View className="px-4 py-6 flex flex-col gap-6">
        <View className="space-y-4 flex flex-col gap-4">
          <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider px-1">{t.language}</Text>
          <View className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden divide-y divide-border-dark flex flex-col">
            <View 
              onClick={() => setLanguage('en')}
              className="w-full flex flex-row items-center justify-between px-4 py-4 hover:bg-white/5 transition-colors border-b border-border-dark last:border-0"
            >
              <View className="flex flex-row items-center gap-3">
                <Text className="text-sm font-medium text-white">{t.english}</Text>
              </View>
              {language === 'en' && <Text className="text-primary text-xl font-bold">✓</Text>}
            </View>
            <View 
              onClick={() => setLanguage('zh')}
              className="w-full flex flex-row items-center justify-between px-4 py-4 hover:bg-white/5 transition-colors"
            >
              <View className="flex flex-row items-center gap-3">
                <Text className="text-sm font-medium text-white">{t.chinese}</Text>
              </View>
              {language === 'zh' && <Text className="text-primary text-xl font-bold">✓</Text>}
            </View>
          </View>
        </View>

        <View className="space-y-4 flex flex-col gap-4">
          <Text className="text-xs font-bold text-text-secondary uppercase tracking-wider px-1">About</Text>
          <View className="bg-surface-dark border border-border-dark rounded-xl px-4 py-4">
            <View className="flex flex-row justify-between items-center text-sm">
                <Text className="text-text-secondary">Version</Text>
                <Text className="font-mono text-xs text-white">1.0.0-mp</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
