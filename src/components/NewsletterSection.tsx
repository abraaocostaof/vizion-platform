import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="bg-vanpass-navy py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Cadastre-se agora e receba ofertas exclusivas!
        </h2>
        <p className="text-white/80 mb-6">
          Ganhe 15% de desconto na sua primeira compra e fique por dentro dos melhores preços da viagem de cada região!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white"
            required
          />
          <Button type="submit" variant="orange" className="px-8">
            Cadastrar
          </Button>
        </form>
      </div>
    </section>
  );
}