import React from 'react';
import { FrequencyData } from '@/lib/analyzer'; 

interface Props {
  data: FrequencyData[];
}

export const FrequencyChart: React.FC<Props> = ({ data }) => {
  // Find largest percentage to scale the chart relative to 100% view
  const maxPercentage = Math.max(...data.map(d => d.percentage)) || 1;

  return (
    <div className="w-full p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-gray-200 font-bold mb-4">Frequency Analysis</h2>
      
      {/* Main Chart Area (Height 64) */}
      <div className="flex items-end justify-between h-64 gap-1 pt-6">
        {data.map((item) => {
          // Math: Scale bars so the tallest one hits the top
          const relativeHeight = (item.percentage / maxPercentage) * 100;
          
          return (
            // WRAPPER FIX: Added 'h-full' and 'justify-end'
            // This ensures the column takes up the full chart height
            <div 
              key={item.letter} 
              className="flex flex-col items-center justify-end flex-1 h-full group cursor-pointer"
            >
              
              {/* THE BAR */}
              <div 
                className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-t-sm relative transition-all duration-500 ease-out"
                style={{ 
                  height: `${relativeHeight}%`, 
                  minHeight: relativeHeight > 0 ? '4px' : '0' 
                }}
              >
                {/* Floating Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center bg-white text-black text-xs font-bold p-1 px-2 rounded shadow-xl transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  <span>{item.count}</span>
                  <span className="text-[10px] text-gray-500">{item.percentage.toFixed(1)}%</span>
                  {/* Little triangle arrow at bottom of tooltip */}
                  <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1"></div>
                </div>
              </div>

              {/* Letter Label */}
              <span className="text-[10px] sm:text-xs mt-2 text-gray-400 font-mono font-medium">
                {item.letter}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};