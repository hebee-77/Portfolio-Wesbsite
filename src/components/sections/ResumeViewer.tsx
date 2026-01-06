'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

type ResumeViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const RESUME_PDF_PATH = '/RESUME_7 copy.pdf';
const RESUME_IMAGE_PATH = '/resume.jpeg';

export default function ResumeViewer({ open, onOpenChange }: ResumeViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen max-w-full h-screen max-h-full flex flex-col p-0">
        <DialogHeader className="p-4 pb-2 border-b">
          <DialogTitle>Hebee E - Resume</DialogTitle>
          <DialogDescription>
            You can preview the resume below or download it as a PDF.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1">
          <div className="p-4 flex justify-center items-start">
             <Image
              src={RESUME_IMAGE_PATH}
              alt="Hebee E Resume"
              width={816} 
              height={1056}
              className="object-contain shadow-lg"
              priority
            />
          </div>
        </ScrollArea>
        <DialogFooter className="p-4 border-t sm:justify-end bg-background">
          <Button asChild>
            <Link href={RESUME_PDF_PATH} download="Hebee_E_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
