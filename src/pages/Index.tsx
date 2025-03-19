
import React, { useState } from 'react';
import CategoryBar from '@/components/CategoryBar';
import SymbolGrid from '@/components/SymbolGrid';
import MessageArea from '@/components/ui/MessageArea';
import Settings from '@/components/ui/Settings';
import { MessageProvider } from '@/context/MessageContext';
import { Settings as SettingsIcon } from 'lucide-react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('basics');
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <MessageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="px-4 py-3 bg-white/80 backdrop-blur-md shadow-soft z-10 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">VoiceBlossom</h1>
          <button
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Settings"
            onClick={() => setSettingsOpen(true)}
          >
            <SettingsIcon size={20} />
          </button>
        </header>
        
        {/* Main content */}
        <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4 pb-8 overflow-hidden">
          {/* Message composition area */}
          <div className="py-4 animate-slide-down">
            <MessageArea />
          </div>
          
          {/* Symbol categories */}
          <div className="w-full overflow-hidden mt-4 rounded-xl shadow-soft animate-slide-up">
            <CategoryBar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            {/* Symbol grid */}
            <div className="bg-white rounded-b-xl overflow-y-auto max-h-[calc(100vh-360px)]">
              <SymbolGrid category={activeCategory} />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-3 px-4 text-center text-sm text-gray-500 bg-white/80 backdrop-blur-md">
          Augmentative and Alternative Communication App
        </footer>
      </div>
      
      {/* Settings Sheet */}
      <Settings open={settingsOpen} onOpenChange={setSettingsOpen} />
    </MessageProvider>
  );
};

export default Index;
