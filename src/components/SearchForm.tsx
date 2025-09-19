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
    <div className="bg-white rounded-lg shadow-card p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Origem e Destino lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="relative">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 rounded-full border border-vanpass-cyan bg-vanpass-cyan"></div>
              </div>
              <Input
                placeholder="Saindo de..."
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="pl-7 h-10 text-sm border-gray-300 rounded"
                list="origins"
              />
              <datalist id="origins">
                {mockCities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MapPin className="h-3 w-3 text-vanpass-cyan" />
              </div>
              <Input
                placeholder="Indo para..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-7 h-10 text-sm border-gray-300 rounded"
                list="destinations"
              />
              <datalist id="destinations">
                {mockCities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        {/* Data e Botão */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="md:col-span-2 relative">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vanpass-cyan h-3 w-3" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-7 h-10 text-sm border-gray-300 rounded"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            variant="orange" 
            className="h-10 w-full text-xs font-bold uppercase tracking-wide rounded"
            disabled={!origin || !destination || !date}
          >
            PROCURAR PASSAGEM
          </Button>
        </div>
      </form>
    </div>
  );
}