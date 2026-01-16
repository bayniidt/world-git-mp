
import { GoogleGenAI, Type } from "@google/genai"

// Use process.env.API_KEY directly for initialization as per strict guidelines
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchWordDetails = async (word: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-exp",
    contents: `Provide detailed vocabulary information for the word: "${word}".`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          phonetic: { type: Type.STRING },
          definition: { type: Type.STRING },
          example: { type: Type.STRING },
          partOfSpeech: { type: Type.STRING },
          labels: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["phonetic", "definition", "example", "partOfSpeech", "labels"]
      }
    }
  });

  return JSON.parse(response.text ?? '{}');
};

export const suggestNewWord = async (level: string = 'B2') => {
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: `Suggest a unique, high-level vocabulary word for an English learner at level ${level}.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              phonetic: { type: Type.STRING },
              definition: { type: Type.STRING },
              example: { type: Type.STRING },
              partOfSpeech: { type: Type.STRING },
            },
            required: ["word", "phonetic", "definition", "example", "partOfSpeech"]
          }
        }
      });
    
      return JSON.parse(response.text ?? '{}');
}
