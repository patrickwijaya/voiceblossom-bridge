import React, { useState, useEffect } from 'react';
import { useMessage } from '@/context/MessageContext';
import Symbol from '@/components/Symbol';
import { X, Trash2, Volume2, Pause, Play, StopCircle } from 'lucide-react';
import speechService from '@/utils/speechUtils';

const MessageArea: React.FC = () => {
  const { message, removeSymbol, clearMessage, messageText, speechSettings } = useMessage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const speaking = speechService.isSpeakingNow();
      if (!speaking && isSpeaking) {
        setIsSpeaking(false);
        setIsPaused(false);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, [isSpeaking]);
  
  const handleSpeak = () => {
    if (messageText.trim()) {
      speechService.speak(messageText, {
        volume: speechSettings.volume,
        rate: speechSettings.rate,
        voiceId: speechSettings.voiceId
      });
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };
  
  const handlePause = () => {
    speechService.pause();
    setIsPaused(true);
  };
  
  const handleResume = () => {
    speechService.resume();
    setIsPaused(false);
  };
  
  const handleStop = () => {
    speechService.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="message-bar rounded-xl p-4 flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700">Pesan</h2>
        <div className="flex gap-2">
          {isSpeaking ? (
            <>
              {isPaused ? (
                <button 
                  className="p-2 rounded-full text-primary hover:text-primary-dark hover:bg-gray-100 transition-colors"
                  onClick={handleResume}
                  aria-label="Resume speaking"
                >
                  <Play size={20} />
                </button>
              ) : (
                <button 
                  className="p-2 rounded-full text-primary hover:text-primary-dark hover:bg-gray-100 transition-colors"
                  onClick={handlePause}
                  aria-label="Pause speaking"
                >
                  <Pause size={20} />
                </button>
              )}
              <button 
                className="p-2 rounded-full text-destructive hover:text-destructive-foreground hover:bg-destructive/10 transition-colors"
                onClick={handleStop}
                aria-label="Stop speaking"
              >
                <StopCircle size={20} />
              </button>
            </>
          ) : (
            <button 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={handleSpeak}
              disabled={message.length === 0}
              aria-label="Speak message"
            >
              <Volume2 size={20} />
            </button>
          )}
          
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
        <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500 border border-gray-100 min-h-[120px]">
          Pilih simbol untuk menyusun pesan Anda...
        </div>
      ) : (
        <div className="flex flex-wrap gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100 min-h-[150px] max-h-[250px] overflow-y-auto">
          {message.map((symbol, index) => (
            <div key={`${symbol.id}-${index}`} className="relative group">
              <Symbol symbol={symbol} size="md" />
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
          className={`w-full rounded-lg p-3 text-gray-700 flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            isSpeaking 
              ? 'bg-primary/10 hover:bg-primary/20' 
              : 'bg-gray-50 hover:bg-gray-100'
          }`}
          onClick={isSpeaking ? (isPaused ? handleResume : handlePause) : handleSpeak}
          disabled={message.length === 0}
        >
          {isSpeaking ? (
            isPaused ? (
              <>
                <Play size={18} />
                <span>Lanjutkan</span>
              </>
            ) : (
              <>
                <Pause size={18} />
                <span>Jeda</span>
              </>
            )
          ) : (
            <>
              <Volume2 size={18} />
              <span>Putar</span>
            </>
          )}
        </button>
        
        {isSpeaking && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-destructive hover:bg-destructive/10 transition-colors"
            onClick={handleStop}
            aria-label="Stop speaking"
          >
            <StopCircle size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageArea;
