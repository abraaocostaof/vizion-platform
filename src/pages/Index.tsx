import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { PopularDestinations } from "@/components/PopularDestinations";

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
      <FeatureSection />
      <PopularDestinations />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VanPass</h3>
              <p className="text-white/80 mb-4">
                A plataforma que conecta passageiros e motoristas de forma segura e prática.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links úteis</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-smooth">Como funciona</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Seja motorista</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-smooth">Termos de uso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80">
                <li>Email: contato@vanpass.com.br</li>
                <li>WhatsApp: (98) 9999-9999</li>
                <li>Atendimento: 24 horas</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 VanPass. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
