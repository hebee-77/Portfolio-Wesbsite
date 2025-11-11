import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { kpis } from '@/lib/data';

const Kpis = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Highlights & Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Quantifiable impact and key achievements from my professional experience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{kpi.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Kpis;
