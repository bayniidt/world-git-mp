
import { View } from '@tarojs/components';
import React from 'react';

interface Props {
  columns?: number;
  rows?: number;
  data?: number[][];
}

const ContributionGraph: React.FC<Props> = ({ columns = 7, rows = 5, data }) => {
  // Generate random data if none provided for visual effect
  // Note: fixed data generation logic to match structure
  const graphData = data || Array.from({ length: columns }, () => 
    Array.from({ length: rows }, () => Math.floor(Math.random() * 4))
  );

  const getIntensityClass = (level: number) => {
    // Mapping tailwind classes to inline styles or assuming global css
    // Using inline styles for simplicity in this port to ensure it works without complex tailwind setup
    switch(level) {
      case 0: return 'bg-gray-200'; // dark:bg-white/5 handled via conditional?
      case 1: return 'bg-primary-30';
      case 2: return 'bg-primary-60';
      case 3: return 'bg-primary';
      default: return 'bg-gray-200';
    }
  };

  // We will assume basic global CSS or utility classes are available.
  // Converting div -> View

  return (
    <View className="flex flex-col gap-2">
      <View className="grid grid-cols-7 gap-1 w-full" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '6px', paddingLeft: '8px', paddingRight: '8px' }}>
        {graphData.map((col, cIdx) => (
          <View key={cIdx} className="flex flex-col gap-1">
            {col.map((level, rIdx) => (
              <View 
                key={rIdx} 
                className={`flex-1 aspect-square rounded-sm ${getIntensityClass(level)}`}
                style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2px', backgroundColor: level === 0 ? '#30363d' : level === 1 ? 'rgba(19, 236, 109, 0.3)' : level === 2 ? 'rgba(19, 236, 109, 0.6)' : '#13ec6d' }}
              />
            ))}
          </View>
        ))}
      </View>
      <View className="flex justify-between items-center text-xs text-gray-400 font-medium px-1 mt-1">
        <View>Less</View>
        <View className="flex gap-1 items-center">
          <View className="size-2 rounded-sm bg-gray-600" style={{ width: 8, height: 8, backgroundColor: '#30363d' }}></View>
          <View className="size-2 rounded-sm bg-primary-30" style={{ width: 8, height: 8, backgroundColor: 'rgba(19, 236, 109, 0.3)' }}></View>
          <View className="size-2 rounded-sm bg-primary-60" style={{ width: 8, height: 8, backgroundColor: 'rgba(19, 236, 109, 0.6)' }}></View>
          <View className="size-2 rounded-sm bg-primary" style={{ width: 8, height: 8, backgroundColor: '#13ec6d' }}></View>
        </View>
        <View>More</View>
      </View>
    </View>
  );
};

export default ContributionGraph;
