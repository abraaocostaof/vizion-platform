// Mock data for VanPass platform as specified in PRD

export interface Driver {
  id: number;
  name: string;
  photo: string;
  vehicle: string;
  seats_total: number;
  rating: number;
  license: string;
}

export interface Route {
  id: number;
  driver_id: number;
  driver?: Driver;
  origin: string;
  destination: string;
  stops: string[];
  date: string;
  time: string;
  price: number;
  seats_total: number;
  seats_available: number;
  meeting_point: string;
}

export interface Reservation {
  id: string;
  route_id: number;
  passenger_name: string;
  phone: string;
  seats: number;
  status: 'pending' | 'confirmed' | 'paid';
  created_at: string;
}

export const mockDrivers: Driver[] = [
  {
    id: 1,
    name: "Cristino Almeida",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    vehicle: "Fiat Ducato",
    seats_total: 16,
    rating: 4.8,
    license: "ABC-1234"
  },
  {
    id: 2,
    name: "Maria Santos",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b152ad80?w=150&h=150&fit=crop&crop=face",
    vehicle: "Mercedes Sprinter",
    seats_total: 20,
    rating: 4.9,
    license: "DEF-5678"
  },
  {
    id: 3,
    name: "João Silva",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    vehicle: "Iveco Daily",
    seats_total: 15,
    rating: 4.7,
    license: "GHI-9012"
  }
];

export const mockRoutes: Route[] = [
  {
    id: 101,
    driver_id: 1,
    origin: "São Luís",
    destination: "Chapadinha",
    stops: ["Bacabeira", "Rosário"],
    date: "2025-09-20",
    time: "15:00",
    price: 60.00,
    seats_total: 16,
    seats_available: 5,
    meeting_point: "Praça da Bíblia, Centro"
  },
  {
    id: 102,
    driver_id: 2,
    origin: "São Luís",
    destination: "Imperatriz",
    stops: ["Bacabal", "Açailândia"],
    date: "2025-09-20",
    time: "06:00",
    price: 120.00,
    seats_total: 20,
    seats_available: 8,
    meeting_point: "Terminal Rodoviário"
  },
  {
    id: 103,
    driver_id: 3,
    origin: "Chapadinha",
    destination: "São Luís",
    stops: ["Brejo", "Mirinzal"],
    date: "2025-09-20",
    time: "12:30",
    price: 55.00,
    seats_total: 15,
    seats_available: 3,
    meeting_point: "Praça São José"
  }
];

// Add driver info to routes
export const getRoutesWithDrivers = (): (Route & { driver: Driver })[] => {
  return mockRoutes.map(route => ({
    ...route,
    driver: mockDrivers.find(driver => driver.id === route.driver_id)!
  }));
};

export const mockCities = [
  "São Luís",
  "Chapadinha",
  "Imperatriz",
  "Bacabal",
  "Açailândia",
  "Caxias",
  "Timon",
  "Codó",
  "Balsas",
  "Santa Inês"
];