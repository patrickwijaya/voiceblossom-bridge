
import React from 'react';
import { useMessage } from '@/context/MessageContext';
import Symbol from '@/components/Symbol';
import { X, Trash2, Volume2 } from 'lucide-react';
import speechService from '@/utils/speechUtils';

const MessageArea: React.FC = () => {
  const { message, removeSymbol, clearMessage, messageText } = useMessage();
  
  const handleSpeak = () => {
    if (messageText.trim()) {
      speechService.speak(messageText);
    }
  };

  return (
    <div className="message-bar rounded-xl p-4 flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700">Pesan</h2>
        <div className="flex gap-2">
          <button 
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={handleSpeak}
            disabled={message.length === 0}
            aria-label="Speak message"
          >
            <Volume2 size={20} />
          </button>
          {message.length > 0 && (
            <button 
              className="p-2 rounded-full text-gray-500 hover:text-destructive hover:bg-gray-100 transition-colors"
              onClick={clearMessage}
              aria-label="Clear message"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>
      </div>
      
      {message.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500 border border-gray-100">
          Pilih simbol untuk menyusun pesan Anda...
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 bg-gray-50 rounded-lg p-3 border border-gray-100 min-h-[80px]">
          {message.map((symbol, index) => (
            <div key={`${symbol.id}-${index}`} className="relative group">
              <Symbol symbol={symbol} size="sm" />
              <button
                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-medium opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeSymbol(index)}
                aria-label={`Remove ${symbol.label}`}
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="w-full relative">
        <button
          className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-3 text-gray-700 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={handleSpeak}
          disabled={message.length === 0}
        >
          <Volume2 size={18} />
          <span>Speak</span>
        </button>
      </div>
    </div>
  );
};

export default MessageArea;
