import { generateSmartReviewSuite } from '../data/reviewGenerator';

/**
 * Direct Google Gemini API Client (Client-Side AI Integration)
 * Calls Google AI Studio API without requiring a backend server.
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const generateGeminiReview = async ({
  businessName = "Muthu Automobiles",
  businessCategory = "Automobile Spare Parts & Services",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  apiKey = GEMINI_API_KEY
}) => {
  // If no API key is provided, use our built-in 1M+ permutation engine directly
  if (!apiKey || apiKey.trim() === '') {
    return generateSmartReviewSuite({
      businessName,
      businessCategory,
      selectedServices,
      tags,
      customerComment,
      rating
    });
  }

  const prompt = `You are a real customer writing authentic Google reviews for "${businessName}" located in Cumbum, Theni District, Tamil Nadu.
Business Specialty: ${businessCategory}.
Customer Rating: ${rating} out of 5 stars.
Services Availed / Parts Purchased: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'Automobile spare parts and mechanical components'}.
Specific Highlights: ${tags.length > 0 ? tags.join(', ') : 'Genuine OEM quality and fair pricing'}.
Customer Extra Notes: ${customerComment ? customerComment : 'None'}.

Generate 4 natural, realistic, high-converting review variations in English with local Tamil Nadu context (Cumbum, Theni, Kumily ghat road, genuine spares, mechanic recommended).
Return ONLY a valid JSON object with the following structure and no markdown formatting:
{
  "seo": "A review rich in local keywords like Cumbum, genuine spare parts, clutch, brake pads, filters, suspension",
  "enthusiastic": "An excited, highly passionate review with emojis",
  "short": "A crisp, concise 2-sentence review",
  "detailed": "A comprehensive paragraph describing the parts purchased, pricing, counter service, and quality",
  "keywords": ["5 local keyword phrases like 'Muthu Automobiles Cumbum', 'car spare parts Cumbum'"]
}`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          response_mime_type: "application/json",
          temperature: 0.8
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (candidateText) {
      const parsed = JSON.parse(candidateText);
      return {
        success: true,
        source: 'gemini-live',
        reviewText: parsed.seo || parsed.enthusiastic || Object.values(parsed)[0],
        tones: {
          seo: parsed.seo,
          enthusiastic: parsed.enthusiastic,
          short: parsed.short,
          detailed: parsed.detailed
        },
        keywords: parsed.keywords || ['Muthu Automobiles Cumbum', 'car spare parts Cumbum', 'genuine auto spares']
      };
    }
  } catch (err) {
    console.warn('Gemini API request failed or timed out, falling back to local Mozhi permutation engine:', err);
  }

  // Graceful fallback to client-side permutation suite
  return generateSmartReviewSuite({
    businessName,
    businessCategory,
    selectedServices,
    tags,
    customerComment,
    rating
  });
};
