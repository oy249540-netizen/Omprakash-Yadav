'use server';
/**
 * @fileOverview An AI agent that provides easy-to-understand explanations of math concepts.
 *
 * - summarizeConcept - A function that handles the concept summarization process.
 * - ConceptSummarizerInput - The input type for the summarizeConcept function.
 * - ConceptSummarizerOutput - The return type for the summarizeConcept function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ConceptSummarizerInputSchema = z.object({
  topic: z.string().describe('The specific math topic to explain.'),
  gradeLevel: z.string().optional().describe('The grade level of the student (e.g., "Class 5", "8th grade") to tailor the explanation.'),
});
export type ConceptSummarizerInput = z.infer<typeof ConceptSummarizerInputSchema>;

const ConceptSummarizerOutputSchema = z.object({
  explanation: z.string().describe('An easy-to-understand explanation of the math concept.'),
  keyTerms: z.array(z.string()).describe('A list of important keywords and terms related to the concept.'),
  simplifiedExample: z.string().optional().describe('A simplified example to illustrate the concept.'),
});
export type ConceptSummarizerOutput = z.infer<typeof ConceptSummarizerOutputSchema>;

export async function summarizeConcept(input: ConceptSummarizerInput): Promise<ConceptSummarizerOutput> {
  return conceptSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'conceptSummarizerPrompt',
  input: { schema: ConceptSummarizerInputSchema },
  output: { schema: ConceptSummarizerOutputSchema },
  prompt: `You are an expert math tutor for middle school students. Your task is to provide an easy-to-understand explanation of the given math topic. Break down the core principles and define key terms.

${'{{#if gradeLevel}}'}The explanation should be suitable for a student in {{{gradeLevel}}} grade.${'{{/if}}'}

Topic: {{{topic}}}

Please ensure the explanation is clear, concise, and engaging for young learners.`,
});

const conceptSummarizerFlow = ai.defineFlow(
  {
    name: 'conceptSummarizerFlow',
    inputSchema: ConceptSummarizerInputSchema,
    outputSchema: ConceptSummarizerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
