
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Symbol } from '../utils/symbolsData';

interface MessageContextProps {
  message: Symbol[];
  addSymbol: (symbol: Symbol) => void;
  removeSymbol: (index: number) => void;
  clearMessage: () => void;
  messageText: string;
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<Symbol[]>([]);

  const addSymbol = useCallback((symbol: Symbol) => {
    setMessage((prev) => [...prev, symbol]);
  }, []);

  const removeSymbol = useCallback((index: number) => {
    setMessage((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearMessage = useCallback(() => {
    setMessage([]);
  }, []);

  // Convert symbols to text for speech synthesis
  const messageText = message.map(symbol => symbol.label).join(' ');

  return (
    <MessageContext.Provider value={{ message, addSymbol, removeSymbol, clearMessage, messageText }}>
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
