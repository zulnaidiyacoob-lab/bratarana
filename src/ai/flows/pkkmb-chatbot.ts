'use server';

/**
 * @fileOverview Chatbot flow for answering questions about PKKMB.
 *
 * - pkkmbChatbot - A function that handles the chatbot process.
 * - PkkmbChatbotInput - The input type for the pkkmbChatbot function.
 * - PkkmbChatbotOutput - The return type for the pkkmbChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PkkmbChatbotInputSchema = z.object({
  question: z.string().describe('The question to ask about PKKMB.'),
});
export type PkkmbChatbotInput = z.infer<typeof PkkmbChatbotInputSchema>;

const PkkmbChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about PKKMB.'),
});
export type PkkmbChatbotOutput = z.infer<typeof PkkmbChatbotOutputSchema>;

export async function pkkmbChatbot(input: PkkmbChatbotInput): Promise<PkkmbChatbotOutput> {
  return pkkmbChatbotFlow(input);
}

// Tool to get the current date
const getCurrentDate = ai.defineTool(
  {
    name: 'getCurrentDate',
    description: 'Gets the current date, day, and time.',
    outputSchema: z.object({
        day: z.string(),
        date: z.string(),
        time: z.string(),
    })
  },
  async () => {
    const now = new Date();
    return {
        day: now.toLocaleDateString('id-ID', { weekday: 'long' }),
        date: now.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
        time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    }
  }
);

// Tool to get weather information
const getWeather = ai.defineTool(
    {
        name: 'getWeather',
        description: "Gets the current weather for a given city.",
        inputSchema: z.object({ city: z.string().describe("The city to get the weather for. Defaults to Jakarta if not specified.") }),
        outputSchema: z.object({
            temperature: z.string(),
            condition: z.string(),
        })
    },
    async ({city}) => {
        // In a real application, you would call a weather API here.
        // For this example, we'll return a static response.
        return {
            temperature: '28°C',
            condition: 'Cerah Berawan',
        }
    }
);

// Tool to get location information
const getLocationInfo = ai.defineTool(
    {
        name: 'getLocationInfo',
        description: 'Gets information about the current event location.',
        outputSchema: z.string(),
    },
    async () => {
        return "The event is held at Universitas Trilogi. Please check the schedule for specific room locations."
    }
)


const prompt = ai.definePrompt({
  name: 'pkkmbChatbotPrompt',
  input: {schema: PkkmbChatbotInputSchema},
  output: {schema: PkkmbChatbotOutputSchema},
  tools: [getCurrentDate, getWeather, getLocationInfo],
  prompt: `You are a friendly and helpful chatbot assistant for PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) at Universitas Trilogi. The theme for this year's event is "Bratarana".

  Your primary role is to answer questions from new students about the orientation event. Be concise and clear in your answers.

  Key Information about PKKMB:
  - Event Name: PKKMB Trilogi University 2025 - Bratarana
  - Dates: September 9th to September 12th, 2025.
  - Location: Universitas Trilogi Campus.

  Use the available tools to answer questions about the current date, time, weather, or location. For weather, if the user does not specify a city, assume Jakarta.

  Always be polite and welcoming.

  Question: {{{question}}}
  `,
});

const pkkmbChatbotFlow = ai.defineFlow(
  {
    name: 'pkkmbChatbotFlow',
    inputSchema: PkkmbChatbotInputSchema,
    outputSchema: PkkmbChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
