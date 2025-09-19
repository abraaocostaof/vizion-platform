import { Shield, CreditCard, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Viagens seguras",
    description: "Motoristas verificados e aprovados"
  },
  {
    icon: CreditCard,
    title: "Pagamento fácil",
    description: "Pix ou pague na hora da viagem"
  },
  {
    icon: Clock,
    title: "Horários flexíveis",
    description: "Várias opções de horários por dia"
  },
  {
    icon: Star,
    title: "Avaliações reais",
    description: "Sistema de avaliações dos usuários"
  }
];

export function FeatureSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Por que escolher o VanPass?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A forma mais prática e segura de viajar entre cidades do Maranhão
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-lg transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-vanpass-cyan-light rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-vanpass-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}