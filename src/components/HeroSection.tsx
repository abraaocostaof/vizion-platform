import heroImage from "@/assets/hero-image.jpg";
import { SearchForm } from "./SearchForm";

interface HeroSectionProps {
  onSearch: (searchData: { origin: string; destination: string; date: string }) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-vanpass-navy via-vanpass-navy to-vanpass-cyan">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Van moderna na estrada" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-vanpass-navy/80 via-vanpass-navy/60 to-vanpass-cyan/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Sua viagem <span className="text-vanpass-cyan">começa aqui</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Encontre e reserve vagas em vans de forma rápida e segura
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-vanpass-cyan/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}