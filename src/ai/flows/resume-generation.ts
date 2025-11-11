'use server';
/**
 * @fileOverview Generates a resume based on user-provided experience and skills.
 *
 * - generateResume - A function that generates a resume.
 * - ResumeInput - The input type for the generateResume function.
 * - ResumeOutput - The return type for the generateResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeInputSchema = z.object({
  experience: z
    .string()
    .describe('A detailed description of your work experience.'),
  skills: z.string().describe('A comma-separated list of your skills.'),
  name: z.string().describe('Your name.'),
  contactInformation: z.string().describe('Your contact information.'),
  desiredJobTitle: z.string().describe('Desired job title.'),
});

export type ResumeInput = z.infer<typeof ResumeInputSchema>;

const ResumeOutputSchema = z.object({
  resume: z.string().describe('The generated resume in text format.'),
});

export type ResumeOutput = z.infer<typeof ResumeOutputSchema>;

export async function generateResume(input: ResumeInput): Promise<ResumeOutput> {
  return generateResumeFlow(input);
}

const resumePrompt = ai.definePrompt({
  name: 'resumePrompt',
  input: {schema: ResumeInputSchema},
  output: {schema: ResumeOutputSchema},
  prompt: `You are an expert resume writer. Create a compelling resume for a data analyst based on the following information. The resume should highlight the candidate's strengths and tailor the resume to the desired job title.

Name: {{{name}}}
Contact Information: {{{contactInformation}}}
Desired Job Title: {{{desiredJobTitle}}}
Experience: {{{experience}}}
Skills: {{{skills}}}

Ensure the resume is well-formatted, easy to read, and emphasizes quantifiable achievements.
`,
});

const generateResumeFlow = ai.defineFlow(
  {
    name: 'generateResumeFlow',
    inputSchema: ResumeInputSchema,
    outputSchema: ResumeOutputSchema,
  },
  async input => {
    const {output} = await resumePrompt(input);
    return output!;
  }
);
