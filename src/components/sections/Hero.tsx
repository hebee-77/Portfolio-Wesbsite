'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hebee E
              <span className="block text-primary">Data Analyst</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transforming complex data into actionable insights that drive business growth and strategic outcomes.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
               <Button size="lg" variant="outline" asChild>
                <Link href="/Hebee_E_Resume.pdf" target="_blank" download>Download Resume</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={600}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
