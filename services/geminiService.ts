
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest, QuoteResult } from "../types";

export const getAIQuote = async (request: QuoteRequest): Promise<QuoteResult> => {
  // Safe access to API_KEY to prevent ReferenceError: process is not defined
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  
  const prompt = `
    Act as a professional cleaning service estimator for a company based in Cheras, Kuala Lumpur, Malaysia. 
    Calculate a realistic quote for:
    - Property: ${request.propertyType}
    - Size/Rooms: ${request.rooms} rooms, ${request.bathrooms} bathrooms
    - Service: ${request.serviceType} cleaning
    
    Current market rates in Cheras for cleaning are roughly RM25-RM35 per hour.
    Provide an estimated price range in RM, estimated duration, a custom recommendation for Cheras residents, and 3 quick cleaning tips.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPrice: { type: Type.STRING, description: "Formatted price range in RM" },
            duration: { type: Type.STRING, description: "Estimated time in hours" },
            recommendation: { type: Type.STRING, description: "A friendly recommendation sentence" },
            tips: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 cleaning tips"
            },
          },
          required: ["estimatedPrice", "duration", "recommendation", "tips"]
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    
    return JSON.parse(text.trim()) as QuoteResult;
  } catch (error) {
    console.error("Error generating quote:", error);
    // Fallback if AI fails or network issues occur
    return {
      estimatedPrice: "RM 120 - RM 250",
      duration: "3 - 5 Hours",
      recommendation: "We suggest a weekly basic clean for standard maintenance in Cheras properties.",
      tips: [
        "Vacuum high-traffic areas daily",
        "Use microfiber cloths for dusting to trap allergens",
        "Keep a squeegee in the shower to prevent water spots"
      ]
    };
  }
};
