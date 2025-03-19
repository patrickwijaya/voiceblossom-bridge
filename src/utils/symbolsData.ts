
export interface Symbol {
  id: string;
  label: string;
  image: string;
  category: string;
  backgroundColor?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'basics', name: 'Dasar', icon: '👋', color: '#3d88e1' },
  { id: 'actions', name: 'Tindakan', icon: '🏃', color: '#4cc04c' },
  { id: 'feelings', name: 'Perasaan', icon: '😊', color: '#fdc526' },
  { id: 'food', name: 'Makanan', icon: '🍎', color: '#e34234' },
  { id: 'places', name: 'Tempat', icon: '🏠', color: '#00b8d9' },
  { id: 'people', name: 'Orang', icon: '👨‍👩‍👧‍👦', color: '#ff9a00' },
  { id: 'letters', name: 'Huruf', icon: 'Aa', color: '#9c6ade' },
  { id: 'numbers', name: 'Angka', icon: '123', color: '#2c3036' },
];

export const symbols: Symbol[] = [
  // Basics category
  { id: 'hello', label: 'Halo', image: '👋', category: 'basics', backgroundColor: '#e6f2ff' },
  { id: 'yes', label: 'Ya', image: '✅', category: 'basics', backgroundColor: '#e6ffe6' },
  { id: 'no', label: 'Tidak', image: '❌', category: 'basics', backgroundColor: '#ffe6e6' },
  { id: 'help', label: 'Tolong', image: '🙏', category: 'basics', backgroundColor: '#fff2e6' },
  { id: 'thanks', label: 'Terima kasih', image: '😊', category: 'basics', backgroundColor: '#fff9e6' },
  { id: 'sos', label: 'Bantuan', image: '🆘', category: 'basics', backgroundColor: '#ffe6e6' },
  { id: 'what', label: 'Apa?', image: '❓', category: 'basics', backgroundColor: '#f2e6ff' },
  { id: 'where', label: 'Dimana?', image: '🧭', category: 'basics', backgroundColor: '#e6fffa' },
  { id: 'when', label: 'Kapan?', image: '⏰', category: 'basics', backgroundColor: '#ffe6f2' },
  
  // Actions category
  { id: 'eat', label: 'Makan', image: '🍽️', category: 'actions', backgroundColor: '#e6ffe6' },
  { id: 'drink', label: 'Minum', image: '🥤', category: 'actions', backgroundColor: '#e6f7ff' },
  { id: 'sleep', label: 'Tidur', image: '😴', category: 'actions', backgroundColor: '#f2e6ff' },
  { id: 'play', label: 'Main', image: '🎮', category: 'actions', backgroundColor: '#fff2e6' },
  { id: 'go', label: 'Pergi', image: '🚶', category: 'actions', backgroundColor: '#ffe6e6' },
  { id: 'stop', label: 'Berhenti', image: '🛑', category: 'actions', backgroundColor: '#ffe6e6' },
  { id: 'want', label: 'Ingin', image: '👆', category: 'actions', backgroundColor: '#e6f2ff' },
  { id: 'give', label: 'Beri', image: '🤲', category: 'actions', backgroundColor: '#fff9e6' },
  { id: 'get', label: 'Ambil', image: '✋', category: 'actions', backgroundColor: '#e6ffe6' },
  
  // Feelings category
  { id: 'happy', label: 'Senang', image: '😃', category: 'feelings', backgroundColor: '#fff9e6' },
  { id: 'sad', label: 'Sedih', image: '😢', category: 'feelings', backgroundColor: '#e6f2ff' },
  { id: 'angry', label: 'Marah', image: '😠', category: 'feelings', backgroundColor: '#ffe6e6' },
  { id: 'scared', label: 'Takut', image: '😨', category: 'feelings', backgroundColor: '#f2e6ff' },
  { id: 'tired', label: 'Lelah', image: '🥱', category: 'feelings', backgroundColor: '#e6fffa' },
  { id: 'sick', label: 'Sakit', image: '🤒', category: 'feelings', backgroundColor: '#ffe6f2' },
  { id: 'love', label: 'Cinta', image: '❤️', category: 'feelings', backgroundColor: '#ffe6e6' },
  { id: 'confused', label: 'Bingung', image: '😕', category: 'feelings', backgroundColor: '#f2e6ff' },
  { id: 'surprised', label: 'Terkejut', image: '😮', category: 'feelings', backgroundColor: '#fff2e6' },
  
  // Food category
  { id: 'apple', label: 'Apel', image: '🍎', category: 'food', backgroundColor: '#ffe6e6' },
  { id: 'banana', label: 'Pisang', image: '🍌', category: 'food', backgroundColor: '#fff9e6' },
  { id: 'bread', label: 'Roti', image: '🍞', category: 'food', backgroundColor: '#fff2e6' },
  { id: 'milk', label: 'Susu', image: '🥛', category: 'food', backgroundColor: '#f9f9f9' },
  { id: 'water', label: 'Air', image: '💧', category: 'food', backgroundColor: '#e6f7ff' },
  { id: 'rice', label: 'Nasi', image: '🍚', category: 'food', backgroundColor: '#f9f9f9' },
  { id: 'chicken', label: 'Ayam', image: '🍗', category: 'food', backgroundColor: '#fff2e6' },
  { id: 'cookie', label: 'Kue', image: '🍪', category: 'food', backgroundColor: '#fff9e6' },
  { id: 'candy', label: 'Permen', image: '🍭', category: 'food', backgroundColor: '#ffe6f2' },
  
  // Places category
  { id: 'home', label: 'Rumah', image: '🏠', category: 'places', backgroundColor: '#e6fffa' },
  { id: 'school', label: 'Sekolah', image: '🏫', category: 'places', backgroundColor: '#e6f2ff' },
  { id: 'park', label: 'Taman', image: '🌳', category: 'places', backgroundColor: '#e6ffe6' },
  { id: 'store', label: 'Toko', image: '🏪', category: 'places', backgroundColor: '#fff9e6' },
  { id: 'hospital', label: 'Rumah Sakit', image: '🏥', category: 'places', backgroundColor: '#ffe6e6' },
  { id: 'bathroom', label: 'Kamar Mandi', image: '🚽', category: 'places', backgroundColor: '#e6f7ff' },
  { id: 'bedroom', label: 'Kamar Tidur', image: '🛏️', category: 'places', backgroundColor: '#f2e6ff' },
  { id: 'kitchen', label: 'Dapur', image: '🍳', category: 'places', backgroundColor: '#fff2e6' },
  { id: 'outside', label: 'Luar', image: '🌳', category: 'places', backgroundColor: '#e6ffe6' },
  
  // People category
  { id: 'mom', label: 'Ibu', image: '👩', category: 'people', backgroundColor: '#ffe6f2' },
  { id: 'dad', label: 'Ayah', image: '👨', category: 'people', backgroundColor: '#e6f2ff' },
  { id: 'sister', label: 'Kakak Perempuan', image: '👧', category: 'people', backgroundColor: '#ffe6f2' },
  { id: 'brother', label: 'Kakak Laki-laki', image: '👦', category: 'people', backgroundColor: '#e6f2ff' },
  { id: 'grandma', label: 'Nenek', image: '👵', category: 'people', backgroundColor: '#fff9e6' },
  { id: 'grandpa', label: 'Kakek', image: '👴', category: 'people', backgroundColor: '#e6fffa' },
  { id: 'friend', label: 'Teman', image: '🧑‍🤝‍🧑', category: 'people', backgroundColor: '#fff2e6' },
  { id: 'teacher', label: 'Guru', image: '👩‍🏫', category: 'people', backgroundColor: '#f2e6ff' },
  { id: 'doctor', label: 'Dokter', image: '👨‍⚕️', category: 'people', backgroundColor: '#e6ffe6' },
];

// Generate letter symbols
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
letters.forEach(letter => {
  symbols.push({
    id: `letter-${letter.toLowerCase()}`,
    label: letter,
    image: letter,
    category: 'letters',
    backgroundColor: '#f5f0ff'
  });
});

// Generate number symbols
for (let i = 0; i <= 9; i++) {
  symbols.push({
    id: `number-${i}`,
    label: `${i}`,
    image: `${i}`,
    category: 'numbers',
    backgroundColor: '#f0f2f5'
  });
}

export const getSymbolsByCategory = (categoryId: string): Symbol[] => {
  return symbols.filter(symbol => symbol.category === categoryId);
};
