import { Button } from "@/components/ui/button";

const partners = [
  "COMETA", "GUANABARA", "REUNIDAS", "CATARINENSE",
  "1001", "AGUIABRANCAR", "GONTIJO", "VIAÇÃO GARCIA"
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Mais de 300 empresas de van parceiras
        </h2>
        <h3 className="text-lg text-primary mb-2">
          com ofertas exclusivas na VanPass!
        </h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          A melhor seleção de vans e cooperativas, de todo o país e com ofertas especiais! É o jeito mais barato de viajar!
        </p>

        {/* Mock partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center mb-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-center h-16"
            >
              <span className="text-xs font-semibold text-gray-600">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <Button variant="vanpass" size="lg">
          Ver todas as empresas
        </Button>
      </div>
    </section>
  );
}