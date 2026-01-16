import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'

export default function Splash() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            Taro.switchTab({ url: '/pages/home/index' })
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <View className="h-screen w-full bg-background-dark flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <View className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '32px 32px' }}></View>
      
      <View className="z-10 flex flex-col items-center justify-center w-full flex-1">
        <View className="relative mb-6">
          <View className="absolute inset-0 bg-primary blur-2xl opacity-10 rounded-full scale-150"></View>
          <View className="relative w-32 h-32 bg-[#1c2e24] shadow-xl rounded-3xl flex items-center justify-center border border-white/5 p-6">
            <Text className="material-symbols-outlined text-primary text-[56px] font-bold">menu_book</Text>
          </View>
        </View>
        <Text className="text-white tracking-tight text-[40px] font-extrabold leading-tight text-center block">WordGit</Text>
        <Text className="text-[#9db9a8] text-sm font-medium opacity-80 mt-1 block">v1.0.0</Text>
      </View>

      <View className="z-10 w-full max-w-xs pb-12">
        <View className="flex flex-col gap-2">
          <View className="flex flex-row justify-between items-end px-1">
            <Text className="text-[#9db9a8] text-[10px] font-bold uppercase tracking-widest">Committing to Repo...</Text>
            <Text className="material-symbols-outlined text-primary text-sm animate-spin">sync</Text>
          </View>
          <View className="flex flex-row gap-1.5 h-2">
            {[...Array(7)].map((_, i) => (
              <View 
                key={i} 
                className={`flex-1 rounded-full transition-all duration-300 ${i * 15 < progress ? 'bg-primary' : 'bg-white/10'}`} 
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}
