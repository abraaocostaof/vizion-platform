import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="VanPass" className="h-8 w-auto" />
            <span className="font-bold text-xl text-primary">vanpass</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Destinos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Como funciona
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Seja motorista
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm">
            <span className="hidden md:inline">👤</span>
            Faça seu login
          </Button>
          <Button variant="vanpass" size="sm" className="text-sm">
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
}