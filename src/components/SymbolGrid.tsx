
import React, { useEffect, useState } from 'react';
import Symbol from './Symbol';
import { Symbol as SymbolType, getSymbolsByCategory } from '@/utils/symbolsData';
import { useMessage } from '@/context/MessageContext';

interface SymbolGridProps {
  category: string;
}

const SymbolGrid: React.FC<SymbolGridProps> = ({ category }) => {
  const [symbols, setSymbols] = useState<SymbolType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addSymbol } = useMessage();

  useEffect(() => {
    // Simulate loading to show smooth transition
    setIsLoading(true);
    
    // Small timeout to allow for animation
    const timer = setTimeout(() => {
      setSymbols(getSymbolsByCategory(category));
      setIsLoading(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [category]);

  const handleSymbolClick = (symbol: SymbolType) => {
    addSymbol(symbol);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4 animate-pulse opacity-70">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="w-full h-20 bg-gray-200 rounded-xl"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4 animate-fade-in">
      {symbols.map((symbol) => (
        <div key={symbol.id} className="animate-scale-in">
          <Symbol
            symbol={symbol}
            onClick={() => handleSymbolClick(symbol)}
          />
        </div>
      ))}
    </div>
  );
};

export default SymbolGrid;
