'use server';

import { generateResume } from '@/ai/flows/resume-generation';
import { z } from 'zod';
import type { ResumeInput } from '@/ai/flows/resume-generation';

const ResumeSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  contactInformation: z.string().min(1, { message: 'Contact information is required.' }),
  desiredJobTitle: z.string().min(1, { message: 'Desired job title is required.' }),
  experience: z.string().min(50, { message: 'Please provide at least 50 characters of experience.' }),
  skills: z.string().min(3, { message: 'Please list some skills.' }),
});

type State = {
  success?: boolean;
  error?: string;
  data?: { resume: string };
  fieldErrors?: {
    [key in keyof ResumeInput]?: string[];
  }
}

export async function generateResumeAction(prevState: State, formData: FormData): Promise<State> {
  const rawFormData = Object.fromEntries(formData.entries());

  const validatedFields = ResumeSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: 'Invalid input provided.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateResume(validatedFields.data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating resume:', error);
    return { error: 'An unexpected error occurred. Failed to generate resume.' };
  }
}
