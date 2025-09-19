import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { RouteCard } from "@/components/RouteCard";
import { Button } from "@/components/ui/button";
import { getRoutesWithDrivers, Route, Driver } from "@/data/mockData";
import { ArrowLeft, Filter } from "lucide-react";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [routes, setRoutes] = useState<(Route & { driver: Driver })[]>([]);
  const [loading, setLoading] = useState(true);

  const origin = searchParams.get("origin") || "";
  const destination = searchParams.get("destination") || "";
  const date = searchParams.get("date") || "";

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      const allRoutes = getRoutesWithDrivers();
      const filteredRoutes = allRoutes.filter(route => 
        route.origin.toLowerCase().includes(origin.toLowerCase()) &&
        route.destination.toLowerCase().includes(destination.toLowerCase()) &&
        route.date === date
      );
      setRoutes(filteredRoutes);
      setLoading(false);
    }, 1000);
  }, [origin, destination, date]);

  const handleNewSearch = (searchData: { origin: string; destination: string; date: string }) => {
    navigate(`/search?origin=${searchData.origin}&destination=${searchData.destination}&date=${searchData.date}`);
  };

  const handleSelectRoute = (route: Route) => {
    // Here would normally navigate to booking page
    console.log("Selected route:", route);
    alert(`Redirecionando para reserva da viagem: ${route.origin} → ${route.destination}`);
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      
      {/* Search Header */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-2xl font-bold text-white">
              {origin} → {destination}
            </h1>
            <span className="text-white/80">{date}</span>
          </div>
          
          <SearchForm onSearch={handleNewSearch} />
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-primary">
              {loading ? "Buscando viagens..." : `${routes.length} viagem${routes.length !== 1 ? 'ns' : ''} encontrada${routes.length !== 1 ? 's' : ''}`}
            </h2>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-1/3" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-1/4" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-muted rounded w-20" />
                      <div className="h-4 bg-muted rounded w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : routes.length > 0 ? (
            <div className="space-y-6">
              {routes.map((route) => (
                <RouteCard 
                  key={route.id} 
                  route={route} 
                  onSelect={handleSelectRoute}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Nenhuma viagem encontrada
              </h3>
              <p className="text-muted-foreground mb-6">
                Não encontramos viagens para essa rota e data. Tente outras opções.
              </p>
              <Button variant="vanpass" onClick={() => navigate("/")}>
                Nova busca
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}