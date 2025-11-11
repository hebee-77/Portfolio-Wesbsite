'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/types';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects that demonstrate my skills in data analysis, modeling, and visualization.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className={cn("glassmorphic-card", "flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-transparent")}>
            <div className="aspect-video relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                data-ai-hint={project.imageHint}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">{tool}</Badge>
                ))}
              </div>
              <Button onClick={() => setSelectedProject(project)} className="w-full">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Goal</h3>
                    <p className="text-muted-foreground">{selectedProject.caseStudy.goal}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Method</h3>
                    <p className="text-muted-foreground">{selectedProject.caseStudy.method}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Result</h3>
                    <p className="text-muted-foreground">{selectedProject.caseStudy.result}</p>
                </div>
              </div>
               <div className="mt-4 flex items-center gap-4">
                {selectedProject.caseStudy.githubUrl && (
                  <Button variant="outline" asChild>
                    <Link href={selectedProject.caseStudy.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                )}
                {selectedProject.caseStudy.liveUrl && (
                  <Button variant="outline" asChild>
                    <Link href={selectedProject.caseStudy.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
