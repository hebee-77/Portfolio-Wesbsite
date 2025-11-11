import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { insights } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const Insights = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Insights & Articles</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sharing my thoughts on data analysis, industry trends, and best practices.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <Card key={insight.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href="#" className="block aspect-video relative">
              <Image
                src={insight.imageUrl}
                alt={insight.title}
                data-ai-hint={insight.imageHint}
                fill
                className="object-cover"
              />
            </Link>
            <CardHeader>
              <CardTitle>
                <Link href="#" className="hover:text-primary transition-colors">{insight.title}</Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground pt-1">{insight.date}</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-muted-foreground mb-4">{insight.summary}</p>
              <Button variant="link" asChild className="p-0 h-auto justify-start">
                <Link href="#">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Insights;
