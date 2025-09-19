import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OffersSection } from "@/components/OffersSection";
import { FeatureSection } from "@/components/FeatureSection";
import { PartnersSection } from "@/components/PartnersSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (searchData: { origin: string; destination: string; date: string }) => {
    // Navigate to search results with query parameters
    navigate(`/search?origin=${searchData.origin}&destination=${searchData.destination}&date=${searchData.date}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <OffersSection />
      <FeatureSection />
      <PartnersSection />
      <FAQSection />
      <NewsletterSection />
      
      {/* Footer */}
      <footer className="bg-vanpass-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">VanPass</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">Passagens de Van</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Empresa</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Trabalhe conosco</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Centro de downloads</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Institucional</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">Sobre a VanPass</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Política de cookies</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Ouvidoria</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Viajante</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Primeira viagem</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Seja motorista</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Termos de uso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-smooth">Contato empresarial</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Fale conosco</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">SAC</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">WhatsApp: (98) 9999-9999</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 VanPass. Todos os direitos reservados.</p>
            <p className="text-xs mt-2">VanPass - a plataforma que conecta passageiros e motoristas</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
