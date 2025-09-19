import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockRoutes, mockDrivers } from "@/data/mockData";

const offers = [
  {
    destination: "Chapadinha",
    state: "MA",
    route: "São Luís → Chapadinha", 
    price: 49.17,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=100&fit=crop",
    discount: "25% OFF"
  },
  {
    destination: "São Paulo",
    state: "SP", 
    route: "Campinas → São Paulo",
    price: 48.50,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=150&h=100&fit=crop",
    discount: "15% OFF"
  },
  {
    destination: "Imperatriz",
    state: "MA",
    route: "São Luís → Imperatriz", 
    price: 52.25,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=100&fit=crop",
    discount: "20% OFF"
  }
];

export function OffersSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">
            Principais ofertas de passagens de van
          </h2>
          <Button variant="link" className="text-vanpass-cyan">
            Ver todas →
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-smooth">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.destination}
                  className="w-full h-32 object-cover"
                />
                <Badge 
                  variant="destructive"
                  className="absolute top-2 right-2 bg-green-500 hover:bg-green-600"
                >
                  {offer.discount}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-primary">
                    {offer.destination}, {offer.state}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {offer.route}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">a partir de</span>
                    <div className="text-xl font-bold text-green-600">
                      R$ {offer.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="text-vanpass-cyan border-vanpass-cyan">
                    Conferir oferta →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}