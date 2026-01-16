import { Text, View } from '@tarojs/components'
import Taro, { useDidShow, useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { translations } from '../../translations'
import { Language } from '../../types'

export default function Settings() {
  const [language, setLanguageState] = useState<Language>('en')
  const [navBarHeight, setNavBarHeight] = useState(0)
  const [statusBarHeight, setStatusBarHeight] = useState(0)
  
  const updateLanguageFromStorage = () => {
    const stored = Taro.getStorageSync('language') as Language
    if (stored) {
      console.log('Settings: syncing language from storage:', stored)
      setLanguageState(stored)
      updateTabBar(stored)
    }
  }

  const updateTabBar = (lang: Language) => {
    const t = translations[lang]
    if (!t) return
    
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

  useLoad(() => {
    const sysInfo = Taro.getSystemInfoSync()
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect()
    
    const statusHeight = sysInfo.statusBarHeight || 20
    setStatusBarHeight(statusHeight)
    
    // Calculate accurate nav bar height to align with capsule
    // The height of the clickable area usually matches the capsule height + padding
    // standard is usually 44px on iOS, 48px on Android, but we can calculate:
    const navContentHeight = (menuButtonInfo.top - statusHeight) * 2 + menuButtonInfo.height
    setNavBarHeight(navContentHeight > 0 ? navContentHeight : 44)

    updateLanguageFromStorage()
  })

  useDidShow(() => {
    updateLanguageFromStorage()
  })

  const setLanguage = (l: Language) => {
    console.log('Settings: setting language to', l)
    setLanguageState(l)
    Taro.setStorageSync('language', l)
    updateTabBar(l)
    Taro.showToast({ title: 'Language updated', icon: 'success', duration: 1000 })
  }

  const goHome = () => {
     Taro.switchTab({ url: '/pages/home/index' })
  }

  const t = translations[language]

  return (
    <View className="bg-background-dark min-h-screen pb-24 animate-in slide-in-from-right-4 duration-300">
      {/* Header Container */}
      <View className="bg-background-dark sticky top-0 z-20 border-b border-border-dark">
        {/* Status Bar Spacer */}
        <View style={{ height: `${statusBarHeight}px` }} />
        {/* Navigation Bar Content */}
        <View 
            className="flex flex-row items-center px-4 relative"
            style={{ height: `${navBarHeight}px` }}
        >
            <View 
                onClick={goHome} 
                className="flex items-center justify-center size-8 rounded-full bg-surface-dark border border-border-dark text-text-secondary mr-3 active:opacity-70"
                style={{ width: '32px', height: '32px' }}
            >
              <Text className="text-lg font-bold">←</Text>
            </View>
            <Text className="text-lg font-bold leading-tight text-white">{t.settings}</Text>
        </View>
      </View>

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
