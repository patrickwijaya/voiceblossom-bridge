
interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
  voiceId?: string | null;
}

class SpeechService {
  private static instance: SpeechService;
  private synth: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private defaultVoice: SpeechSynthesisVoice | null = null;
  private defaultOptions: SpeechOptions = {
    rate: 1,
    pitch: 1,
    volume: 1,
    lang: 'id-ID' // Default to Indonesian, can be changed
  };
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;

  private constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();
    
    // Handle dynamically loaded voices in some browsers
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }
  }

  public static getInstance(): SpeechService {
    if (!SpeechService.instance) {
      SpeechService.instance = new SpeechService();
    }
    return SpeechService.instance;
  }

  private loadVoices(): void {
    this.voices = this.synth.getVoices();
    
    // Try to find Indonesian voice or any voice that supports Indonesian
    this.defaultVoice = this.voices.find(voice => 
      voice.lang.includes('id-ID') || voice.lang.includes('id')
    ) || null;
    
    // If no Indonesian voice is found, use the first available voice
    if (!this.defaultVoice && this.voices.length > 0) {
      this.defaultVoice = this.voices[0];
    }
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.synth.getVoices();
  }

  public speak(text: string, options: SpeechOptions = {}): void {
    if (!this.synth) {
      console.error('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    this.synth.cancel();

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance = utterance;
    
    // Apply options with defaults
    const mergedOptions = { ...this.defaultOptions, ...options };
    utterance.rate = mergedOptions.rate || 1;
    utterance.pitch = mergedOptions.pitch || 1;
    utterance.volume = mergedOptions.volume || 1;
    
    // Set language and voice
    utterance.lang = mergedOptions.lang || 'id-ID';
    
    if (mergedOptions.voiceId) {
      const selectedVoice = this.voices.find(voice => voice.voiceURI === mergedOptions.voiceId);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    } else if (this.defaultVoice) {
      utterance.voice = this.defaultVoice;
    }
    
    // Add event listeners to track speaking state
    utterance.onstart = () => {
      this.isSpeaking = true;
    };
    
    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
    };
    
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      this.isSpeaking = false;
      this.currentUtterance = null;
    };
    
    this.synth.speak(utterance);
  }

  public cancel(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
  }

  public pause(): void {
    if (this.synth) {
      this.synth.pause();
    }
  }

  public resume(): void {
    if (this.synth) {
      this.synth.resume();
    }
  }
  
  public isSpeakingNow(): boolean {
    return this.isSpeaking;
  }
}

// Create singleton instance
const speechService = SpeechService.getInstance();

export default speechService;
