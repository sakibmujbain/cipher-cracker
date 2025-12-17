import { ALPHABET } from "./constants";

export interface FrequencyData {
  letter: string;
  count: number;
  percentage: number;
}

export const analyzeText = (text: string): FrequencyData[] => {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '');
  const totalChars = cleanText.length;
  
  // 1. Initialize Map (Similar to int freq[26] = {0} in C++)
  const counts: Record<string, number> = {};
  ALPHABET.forEach(char => counts[char] = 0);

  // 2. Count (Linear scan O(N))
  for (const char of cleanText) {
    counts[char]++;
  }

  // 3. Transform to Array and Calculate Percentages
  // We return an array because it's easier to map() in React
  return ALPHABET.map((char) => ({
    letter: char,
    count: counts[char],
    percentage: totalChars > 0 ? (counts[char] / totalChars) * 100 : 0
  }));
};