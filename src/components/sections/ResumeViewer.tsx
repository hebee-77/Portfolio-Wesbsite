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

const RESUME_PDF_PATH = '/RESUME_7 copy.pdf';

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
        <div className="flex-1 px-6 py-4 overflow-hidden">
            <object 
                data={RESUME_PDF_PATH} 
                type="application/pdf" 
                width="100%" 
                height="100%"
            >
                <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
            </object>
        </div>
        <DialogFooter className="p-6 pt-4 border-t sm:justify-end">
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
