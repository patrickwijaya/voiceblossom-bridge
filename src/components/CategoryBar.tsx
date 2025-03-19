
import React from 'react';
import { categories } from '@/utils/symbolsData';
import { cn } from '@/lib/utils';

interface CategoryBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full overflow-x-auto py-3 px-2 flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-soft">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'category-btn flex flex-col items-center justify-center min-w-[72px] h-[72px] p-2 rounded-xl',
              'border border-transparent focus:outline-none',
              isActive ? 
                'shadow-medium border-primary/20 bg-white' : 
                'shadow-soft hover:shadow-medium bg-white/90'
            )}
            style={{ 
              boxShadow: isActive ? `0 0 0 2px ${category.color}40, 0 4px 10px ${category.color}20` : undefined 
            }}
            aria-label={category.name}
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryBar;
