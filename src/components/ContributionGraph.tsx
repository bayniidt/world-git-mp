
import { View } from '@tarojs/components';
import React from 'react';

interface Props {
  columns?: number;
  rows?: number;
  data?: number[][];
}

const ContributionGraph: React.FC<Props> = ({ columns = 15, rows = 5, data }) => {
  // Generate random data if none provided for visual effect
  const graphData = data || Array.from({ length: columns }, () => 
    Array.from({ length: rows }, () => Math.floor(Math.random() * 4))
  );

  const actualColumns = graphData.length;

  const getIntensityClass = (level: number) => {
    switch(level) {
      case 0: return 'bg-gray-200'; 
      case 1: return 'bg-primary-30';
      case 2: return 'bg-primary-60';
      case 3: return 'bg-primary';
      default: return 'bg-gray-200';
    }
  };

  return (
    <View className="w-full" style={{ display: 'grid', gridTemplateColumns: `repeat(${actualColumns}, 1fr)`, gap: '4px' }}>
      {graphData.map((col, cIdx) => (
        <View key={cIdx} className="flex flex-col gap-1" style={{ gap: '4px' }}>
          {col.map((level, rIdx) => (
            <View 
              key={rIdx} 
              className={`w-full aspect-square rounded-sm ${getIntensityClass(level)}`}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '2px', backgroundColor: level === 0 ? '#30363d' : level === 1 ? 'rgba(19, 236, 109, 0.3)' : level === 2 ? 'rgba(19, 236, 109, 0.6)' : '#13ec6d' }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default ContributionGraph;
