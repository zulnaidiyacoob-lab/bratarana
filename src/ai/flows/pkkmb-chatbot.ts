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

const prompt = ai.definePrompt({
  name: 'pkkmbChatbotPrompt',
  input: {schema: PkkmbChatbotInputSchema},
  output: {schema: PkkmbChatbotOutputSchema},
  prompt: `You are a chatbot assistant for PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru), an orientation event for new students.
  Answer the following question about PKKMB based on your knowledge and available documents.

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
