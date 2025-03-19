
import React, { useEffect, useState } from 'react';
import { useMessage } from '@/context/MessageContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import speechService from '@/utils/speechUtils';

interface SettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ open, onOpenChange }) => {
  const { speechSettings, updateSpeechSettings } = useMessage();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  useEffect(() => {
    // Get available voices
    const availableVoices = speechService.getVoices();
    setVoices(availableVoices);
    
    // Handle voices loaded after initial render (for some browsers)
    const onVoicesChanged = () => {
      setVoices(speechService.getVoices());
    };
    
    speechSynthesis.onvoiceschanged = onVoicesChanged;
    
    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleVolumeChange = (value: number[]) => {
    updateSpeechSettings({ volume: value[0] });
  };

  const handleRateChange = (value: number[]) => {
    updateSpeechSettings({ rate: value[0] });
  };

  const handleVoiceChange = (value: string) => {
    updateSpeechSettings({ voiceId: value });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Pengaturan Suara</SheetTitle>
          <SheetDescription>
            Sesuaikan pengaturan suara sesuai preferensi Anda
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          {/* Volume Setting */}
          <div className="space-y-2">
            <label htmlFor="volume" className="text-sm font-medium">
              Volume: {Math.round(speechSettings.volume * 100)}%
            </label>
            <Slider
              id="volume"
              defaultValue={[speechSettings.volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
            />
          </div>
          
          {/* Rate Setting */}
          <div className="space-y-2">
            <label htmlFor="rate" className="text-sm font-medium">
              Kecepatan: {speechSettings.rate.toFixed(1)}x
            </label>
            <Slider
              id="rate"
              defaultValue={[speechSettings.rate]}
              min={0.5}
              max={2}
              step={0.1}
              onValueChange={handleRateChange}
            />
          </div>
          
          {/* Voice Selection */}
          <div className="space-y-2">
            <label htmlFor="voice" className="text-sm font-medium">
              Jenis Suara
            </label>
            <Select 
              value={speechSettings.voiceId || ''} 
              onValueChange={handleVoiceChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih jenis suara" />
              </SelectTrigger>
              <SelectContent>
                {voices.map((voice) => (
                  <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                    {voice.name} ({voice.lang})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Settings;
