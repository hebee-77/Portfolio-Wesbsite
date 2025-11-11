import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What I Do</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I specialize in transforming data into strategic assets. Here are the core services I offer.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className={cn("glassmorphic-card", "text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-transparent")}>
            <CardHeader className="items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="pt-2">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
