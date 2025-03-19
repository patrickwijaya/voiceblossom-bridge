
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Symbol } from '../utils/symbolsData';

interface SpeechSettings {
  volume: number;
  rate: number;
  voiceId: string | null;
}

interface MessageContextProps {
  message: Symbol[];
  addSymbol: (symbol: Symbol) => void;
  removeSymbol: (index: number) => void;
  clearMessage: () => void;
  messageText: string;
  speechSettings: SpeechSettings;
  updateSpeechSettings: (settings: Partial<SpeechSettings>) => void;
}

const defaultSpeechSettings: SpeechSettings = {
  volume: 1,
  rate: 1,
  voiceId: null,
};

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<Symbol[]>([]);
  const [speechSettings, setSpeechSettings] = useState<SpeechSettings>(defaultSpeechSettings);

  const addSymbol = useCallback((symbol: Symbol) => {
    setMessage((prev) => [...prev, symbol]);
  }, []);

  const removeSymbol = useCallback((index: number) => {
    setMessage((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearMessage = useCallback(() => {
    setMessage([]);
  }, []);

  const updateSpeechSettings = useCallback((settings: Partial<SpeechSettings>) => {
    setSpeechSettings(prev => ({ ...prev, ...settings }));
  }, []);

  // Convert symbols to text for speech synthesis
  const messageText = message.map(symbol => symbol.label).join(' ');

  return (
    <MessageContext.Provider value={{ 
      message, 
      addSymbol, 
      removeSymbol, 
      clearMessage, 
      messageText,
      speechSettings,
      updateSpeechSettings
    }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
