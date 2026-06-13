'use server';
/**
 * @fileOverview A Genkit flow for the AI Concept Sculptor that breaks down math problems into simplified, logical steps with conceptual explanations.
 *
 * - solveMathProblem - A function that handles the math problem-solving process.
 * - StudentProblemSolverInput - The input type for the solveMathProblem function.
 * - StudentProblemSolverOutput - The return type for the solveMathProblem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudentProblemSolverInputSchema = z.object({
  problem: z.string().describe('The complex geometric or algebraic math problem to be solved.'),
});
export type StudentProblemSolverInput = z.infer<typeof StudentProblemSolverInputSchema>;

const ConceptualStepSchema = z.object({
  step: z.string().describe('A concise description of the logical step.'),
  explanation: z.string().describe('A clear conceptual explanation for the step, avoiding jargon where possible.'),
});

const StudentProblemSolverOutputSchema = z.object({
  conceptualSteps: z.array(ConceptualStepSchema).describe('An array of logical steps, each with a conceptual explanation, to solve the problem.'),
});
export type StudentProblemSolverOutput = z.infer<typeof StudentProblemSolverOutputSchema>;

export async function solveMathProblem(input: StudentProblemSolverInput): Promise<StudentProblemSolverOutput> {
  return studentProblemSolverFlow(input);
}

const problemSolverPrompt = ai.definePrompt({
  name: 'studentProblemSolverPrompt',
  input: {schema: StudentProblemSolverInputSchema},
  output: {schema: StudentProblemSolverOutputSchema},
  prompt: `You are an expert math tutor named 'AI Concept Sculptor' specialized in breaking down complex geometric and algebraic problems into simplified, logical steps with clear conceptual explanations.

Your goal is to help a student understand the solution process by focusing on the underlying concepts rather than just providing the answer.

Given the following math problem, provide a step-by-step breakdown. For each step, clearly state the action to be taken and then provide a conceptual explanation of why that step is necessary or what mathematical principle it applies.

Problem: {{{problem}}}`,
});

const studentProblemSolverFlow = ai.defineFlow(
  {
    name: 'studentProblemSolverFlow',
    inputSchema: StudentProblemSolverInputSchema,
    outputSchema: StudentProblemSolverOutputSchema,
  },
  async input => {
    const {output} = await problemSolverPrompt(input);
    return output!;
  }
);
