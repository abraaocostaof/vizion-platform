import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star } from "lucide-react";
import { Route, Driver } from "@/data/mockData";

interface RouteCardProps {
  route: Route & { driver: Driver };
  onSelect: (route: Route) => void;
}

export function RouteCard({ route, onSelect }: RouteCardProps) {
  const occupancyPercentage = ((route.seats_total - route.seats_available) / route.seats_total) * 100;
  
  return (
    <Card className="shadow-card hover:shadow-lg transition-smooth animate-fade-in">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Driver Info */}
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={route.driver.photo} alt={route.driver.name} />
              <AvatarFallback>{route.driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-primary">{route.driver.name}</h3>
              <p className="text-sm text-muted-foreground">{route.driver.vehicle}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">{route.driver.rating}</span>
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-vanpass-cyan" />
              <span className="font-medium">{route.time}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-vanpass-cyan" />
              <span>{route.origin} → {route.destination}</span>
            </div>

            {route.stops.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Paradas: {route.stops.join(", ")}
              </p>
            )}

            <p className="text-xs text-muted-foreground">
              Ponto de encontro: {route.meeting_point}
            </p>
          </div>

          {/* Availability & Price */}
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">
                R$ {route.price.toFixed(2).replace('.', ',')}
              </p>
              <p className="text-xs text-muted-foreground">por pessoa</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {route.seats_available} de {route.seats_total} vagas
              </span>
            </div>

            {/* Occupancy Bar */}
            <div className="w-full max-w-[120px]">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-vanpass-cyan h-2 rounded-full transition-smooth"
                  style={{ width: `${occupancyPercentage}%` }}
                ></div>
              </div>
            </div>

            {route.seats_available <= 3 && (
              <Badge variant="destructive" className="text-xs">
                Poucas vagas!
              </Badge>
            )}

            <Button 
              variant="vanpass" 
              size="sm"
              onClick={() => onSelect(route)}
              disabled={route.seats_available === 0}
            >
              {route.seats_available === 0 ? 'Esgotado' : 'Selecionar'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}