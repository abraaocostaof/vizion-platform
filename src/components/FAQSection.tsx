import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Como comprar passagem de van pela internet?",
    answer: "É muito simples! Basta informar sua origem, destino e data da viagem. Escolha o motorista e horário que preferir, preencha seus dados e efetue o pagamento."
  },
  {
    question: "Com quantos anos pode viajar sozinho de van?",
    answer: "Menores de 18 anos podem viajar sozinhos, mas precisam de autorização dos pais ou responsáveis, conforme legislação vigente."
  },
  {
    question: "Pode viajar com animal no van?",
    answer: "Alguns motoristas permitem o transporte de animais mediante acordo prévio. Consulte as regras específicas de cada viagem."
  },
  {
    question: "Quem paga meio passagem de van ou de viagem?",
    answer: "Estudantes, idosos e pessoas com deficiência podem ter direito a desconto, conforme regulamentação local e políticas do motorista."
  },
  {
    question: "Qual idade paga passagem de van ou de viagem?",
    answer: "Crianças até 5 anos não pagam passagem no colo. A partir dos 6 anos, pagam passagem integral."
  },
  {
    question: "Como cancelar passagem de van?",
    answer: "O cancelamento pode ser feito pelo app ou site até 24h antes da viagem, sujeito às políticas de cada motorista."
  },
  {
    question: "Posso comprar passagem de van para outra pessoa?",
    answer: "Sim, você pode comprar passagens para terceiros. Basta informar os dados corretos da pessoa que irá viajar."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">
            Tem alguma dúvida
          </h2>
          <h3 className="text-xl text-primary mb-8 text-center">
            sobre a VanPass?
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-muted/50 transition-smooth flex items-center justify-between"
                >
                  <span className="font-medium text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg text-center">
            <h4 className="font-bold text-primary mb-2">
              VanPass: passagem de van para todo o Brasil!
            </h4>
            <p className="text-muted-foreground text-sm">
              Com a VanPass, você pode comprar passagem de van para mais de 200 destinos! 
              São mais de 300 cooperativas e motoristas parceiros. Encontre o melhor preço, 
              compare rotas e escolha o horário que mais combina com você. 
              Compre sua passagem de van online de forma fácil, rápida e segura!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}