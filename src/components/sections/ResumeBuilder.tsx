'use client';

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { generateResumeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, Download } from 'lucide-react';

type ResumeBuilderProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ResumeSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  contactInformation: z.string().min(1, 'Contact info is required.'),
  desiredJobTitle: z.string().min(1, 'Job title is required.'),
  experience: z.string().min(50, 'Experience must be at least 50 characters.'),
  skills: z.string().min(3, 'Skills are required.'),
});

type ResumeFormData = z.infer<typeof ResumeSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Generate Resume
    </Button>
  );
}

export default function ResumeBuilder({ open, onOpenChange }: ResumeBuilderProps) {
  const { toast } = useToast();
  const [generatedResume, setGeneratedResume] = useState<string | null>(null);
  
  const [state, formAction] = useFormState(generateResumeAction, {
    success: false,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ResumeFormData>({
    resolver: zodResolver(ResumeSchema),
    defaultValues: {
      name: 'Alex Doe',
      contactInformation: 'alex.doe@email.com | 555-123-4567 | linkedin.com/in/alexdoe',
      desiredJobTitle: 'Data Analyst',
      experience: '3+ years of experience as a data analyst, specializing in e-commerce. Proven ability to translate business questions into analytical frameworks. Led a project to analyze customer purchase behavior, which resulted in a 15% increase in repeat purchases. Built and maintained dashboards in Tableau, providing key stakeholders with real-time insights into sales performance. Automated several reporting processes using Python and SQL, saving approximately 10 hours of manual work per week.',
      skills: 'SQL, Python (Pandas, Scikit-learn), Tableau, Power BI, A/B Testing, Statistical Analysis, Data Modeling, ETL',
    }
  });

  useEffect(() => {
    if (state.success && state.data?.resume) {
      setGeneratedResume(state.data.resume);
    } else if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: state.error,
      });
    }
  }, [state, toast]);

  useEffect(() => {
    if (!open) {
      reset();
      setGeneratedResume(null);
    }
  }, [open, reset]);

  const handleCopy = () => {
    if (generatedResume) {
      navigator.clipboard.writeText(generatedResume);
      toast({ title: 'Success', description: 'Resume copied to clipboard.' });
    }
  };

  const handleDownload = () => {
    if (generatedResume) {
      const blob = new Blob([generatedResume], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({ title: 'Success', description: 'Resume downloaded.' });
    }
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Resume Builder</DialogTitle>
          <DialogDescription>
            Fill in your details below. Our AI will generate a tailored resume for you.
          </DialogDescription>
        </DialogHeader>
        
        {generatedResume ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto bg-muted/50 p-4 rounded-md border text-sm">
              <pre className="whitespace-pre-wrap font-sans">{generatedResume}</pre>
            </div>
            <DialogFooter className="pt-4 gap-2 sm:justify-end">
              <Button variant="outline" onClick={handleCopy}><Copy className="mr-2 h-4 w-4" /> Copy</Button>
              <Button onClick={handleDownload}><Download className="mr-2 h-4 w-4" /> Download .txt</Button>
              <Button variant="secondary" onClick={() => setGeneratedResume(null)}>Back to Form</Button>
            </DialogFooter>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...register('name')} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                {(state.fieldErrors?.name) && <p className="text-xs text-destructive">{state.fieldErrors.name.join(', ')}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactInformation">Contact Information</Label>
                <Input id="contactInformation" {...register('contactInformation')} />
                {errors.contactInformation && <p className="text-xs text-destructive">{errors.contactInformation.message}</p>}
                 {(state.fieldErrors?.contactInformation) && <p className="text-xs text-destructive">{state.fieldErrors.contactInformation.join(', ')}</p>}
              </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="desiredJobTitle">Desired Job Title</Label>
              <Input id="desiredJobTitle" {...register('desiredJobTitle')} />
              {errors.desiredJobTitle && <p className="text-xs text-destructive">{errors.desiredJobTitle.message}</p>}
              {(state.fieldErrors?.desiredJobTitle) && <p className="text-xs text-destructive">{state.fieldErrors.desiredJobTitle.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Work Experience</Label>
              <Textarea id="experience" {...register('experience')} className="min-h-[120px]" />
              {errors.experience && <p className="text-xs text-destructive">{errors.experience.message}</p>}
              {(state.fieldErrors?.experience) && <p className="text-xs text-destructive">{state.fieldErrors.experience.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input id="skills" {...register('skills')} />
              {errors.skills && <p className="text-xs text-destructive">{errors.skills.message}</p>}
              {(state.fieldErrors?.skills) && <p className="text-xs text-destructive">{state.fieldErrors.skills.join(', ')}</p>}
            </div>
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
