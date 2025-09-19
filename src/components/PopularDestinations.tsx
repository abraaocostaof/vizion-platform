import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  {
    city: "São Luís",
    description: "Capital do Maranhão",
    routes: 45,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop"
  },
  {
    city: "Imperatriz", 
    description: "Portal de entrada da Amazônia",
    routes: 28,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop"
  },
  {
    city: "Chapadinha",
    description: "Coração do baixo Parnaíba",
    routes: 18,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
  },
  {
    city: "Caxias",
    description: "Princesa do Sertão",
    routes: 22,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop"
  }
];

export function PopularDestinations() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Destinos populares
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha seu destino e encontre a melhor rota
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.city} 
              className="overflow-hidden shadow-card hover:shadow-lg transition-smooth cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.city}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4" />
                    <h3 className="font-semibold">{destination.city}</h3>
                  </div>
                  <p className="text-sm opacity-90">{destination.description}</p>
                  <p className="text-xs mt-1">{destination.routes} rotas disponíveis</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver todos os destinos
          </Button>
        </div>
      </div>
    </section>
  );
}