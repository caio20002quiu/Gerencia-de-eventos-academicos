import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Event, EventState } from '../types';
import { mockEvents } from '../data/mockData';

// Action types
type EventAction =
  | { type: 'SET_EVENTS'; payload: Event[] }
  | { type: 'SET_FEATURED_EVENTS'; payload: Event[] }
  | { type: 'SET_CURRENT_EVENT'; payload: Event }
  | { type: 'CREATE_EVENT'; payload: Event }
  | { type: 'UPDATE_EVENT'; payload: Event }
  | { type: 'DELETE_EVENT'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

// Initial state
const initialState: EventState = {
  events: mockEvents,
  featuredEvents: mockEvents.slice(0, 4),
  currentEvent: null,
  isLoading: false,
  error: null,
};

// Create context
const EventContext = createContext<{
  state: EventState;
  dispatch: React.Dispatch<EventAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Reducer function
const eventReducer = (state: EventState, action: EventAction): EventState => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case 'SET_FEATURED_EVENTS':
      return {
        ...state,
        featuredEvents: action.payload,
        isLoading: false,
      };
    case 'SET_CURRENT_EVENT':
      return {
        ...state,
        currentEvent: action.payload,
        isLoading: false,
      };
    case 'CREATE_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
        isLoading: false,
      };
    case 'UPDATE_EVENT': {
      const updatedEvents = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      return {
        ...state,
        events: updatedEvents,
        currentEvent: action.payload,
        isLoading: false,
      };
    }
    case 'DELETE_EVENT': {
      const filteredEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        ...state,
        events: filteredEvents,
        isLoading: false,
      };
    }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

// Provider component
export const EventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the EventContext
export const useEventContext = () => useContext(EventContext);