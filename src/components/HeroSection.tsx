import busIllustration from "@/assets/bus-illustration.png";
import { SearchForm } from "./SearchForm";

interface HeroSectionProps {
  onSearch: (searchData: { origin: string; destination: string; date: string }) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section className="relative bg-vanpass-cyan overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 animate-fade-in">
              COMPRE SUA PASSAGEM<br />
              DE VAN NA VANPASS
            </h1>
            <p className="text-lg text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Encontre ofertas exclusivas<br />
              e sua próxima viagem!
            </p>
            
            {/* Compact Search Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <SearchForm onSearch={onSearch} />
            </div>

            {/* Promotional Banner */}
            <div className="mt-4 bg-vanpass-navy rounded-lg p-3 flex items-center gap-3 text-white animate-fade-in text-sm" style={{ animationDelay: '0.6s' }}>
              <div className="bg-vanpass-cyan rounded-full px-2 py-1">
                <span className="text-xs font-bold">APP</span>
              </div>
              <div className="flex-1">
                <p className="text-xs leading-tight">
                  <strong>Baixe o app VanPass e</strong><br />
                  <strong>ganhe 15% OFF a partir</strong><br />
                  <strong>da segunda compra!</strong>
                </p>
              </div>
              <div className="text-right">
                <div className="bg-white/10 rounded p-1 text-xs">
                  QR CODE<br />
                  ⬜⬛⬜⬛<br />
                  ⬛⬜⬛⬜
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={busIllustration} 
              alt="Ilustração de van moderna" 
              className="max-w-md w-full h-auto animate-slide-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}