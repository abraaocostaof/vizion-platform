import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, ArrowUpDown, MapPin } from "lucide-react";
import { mockCities } from "@/data/mockData";

interface SearchFormProps {
  onSearch: (searchData: {
    origin: string;
    destination: string;
    date: string;
  }) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin && destination && date) {
      onSearch({ origin, destination, date });
    }
  };

  const swapCities = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
        Encontre sua viagem
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Origem */}
          <div className="flex-1 relative">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Partindo de"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="pl-10 h-12"
                list="origins"
              />
              <datalist id="origins">
                {mockCities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Trocar cidades */}
          <div className="flex justify-center items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={swapCities}
              className="rounded-full border bg-white shadow-sm hover:bg-muted"
            >
              <ArrowUpDown className="h-4 w-4 text-vanpass-cyan" />
            </Button>
          </div>

          {/* Destino */}
          <div className="flex-1 relative">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Indo para"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10 h-12"
                list="destinations"
              />
              <datalist id="destinations">
                {mockCities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Data */}
          <div className="flex-1 relative">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 h-12"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={!origin || !destination || !date}
        >
          <Search className="h-5 w-5 mr-2" />
          Buscar Passagem
        </Button>
      </form>
    </div>
  );
}