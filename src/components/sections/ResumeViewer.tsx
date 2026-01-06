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

type ResumeViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const RESUME_PDF_PATH = '/Hebee_E_Resume.pdf';

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
        <div className="flex-1 overflow-hidden">
          <object
            data={RESUME_PDF_PATH}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p className="p-4">
              Your browser does not support PDFs. 
              <Link href={RESUME_PDF_PATH} className="text-primary underline">
                Download the PDF
              </Link>
              instead.
            </p>
          </object>
        </div>
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
