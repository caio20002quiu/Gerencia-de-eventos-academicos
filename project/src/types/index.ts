export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  startDate: string;
  endDate: string;
  location: string;
  isOnline: boolean;
  category: string;
  imageUrl: string;
  organizer: string;
  organizerId: string;
  price: number;
  isFree: boolean;
  capacity: number;
  registrations: number;
  tags: string[];
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileImageUrl?: string;
  createdEvents?: string[];
  registeredEvents?: string[];
}

export interface EventRegistration {
  id: string;
  eventId: string;
  userId: string;
  registrationDate: string;
  ticketType: string;
  ticketPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface EventState {
  events: Event[];
  featuredEvents: Event[];
  currentEvent: Event | null;
  isLoading: boolean;
  error: string | null;
}