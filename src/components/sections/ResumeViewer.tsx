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
import Image from 'next/image';
import { Download } from 'lucide-react';

type ResumeViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const RESUME_PDF_PATH = '/Hebee_E_Resume.pdf';
const RESUME_IMAGE_PATH = '/Hebee_E_Resume.png';

export default function ResumeViewer({ open, onOpenChange }: ResumeViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Hebee E - Resume</DialogTitle>
          <DialogDescription>
            You can view the resume below or download it as a PDF.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 px-6 overflow-hidden relative">
          <Image
            src={RESUME_IMAGE_PATH}
            alt="Hebee E Resume"
            fill
            className="object-contain"
          />
        </div>
        <DialogFooter className="p-6 pt-0 sm:justify-end">
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
