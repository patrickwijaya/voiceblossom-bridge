
import React from 'react';
import { cn } from '@/lib/utils';
import { Symbol as SymbolType } from '@/utils/symbolsData';

interface SymbolProps {
  symbol: SymbolType;
  onClick?: () => void;
  isSelected?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Symbol: React.FC<SymbolProps> = ({ 
  symbol, 
  onClick, 
  isSelected = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-20 h-20 text-2xl',
    lg: 'w-24 h-24 text-3xl'
  };

  const isEmoji = /\p{Emoji}/u.test(symbol.image);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'symbol-transition flex flex-col items-center justify-center rounded-xl p-2',
        'hover:shadow-medium transform transition-all duration-300 hover:-translate-y-1',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
        isSelected ? 'ring-2 ring-primary shadow-medium scale-105' : 'shadow-soft',
        sizeClasses[size]
      )}
      style={{ backgroundColor: symbol.backgroundColor || '#f5f7fa' }}
      aria-label={symbol.label}
    >
      <div className="flex items-center justify-center mb-1 h-3/5">
        {isEmoji ? (
          <span className={cn(
            'inline-block leading-none',
            size === 'sm' ? 'text-3xl' : size === 'md' ? 'text-4xl' : 'text-5xl'
          )}>
            {symbol.image}
          </span>
        ) : (
          <span className={cn(
            'inline-block font-bold',
            size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : 'text-3xl'
          )}>
            {symbol.image}
          </span>
        )}
      </div>
      <div className="text-center mt-1 text-xs font-medium truncate w-full">
        {symbol.label}
      </div>
    </button>
  );
};

export default Symbol;
