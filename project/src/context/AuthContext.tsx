import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { User, AuthState } from '../types';
import { mockUsers } from '../data/mockData';

// Action types
type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Create context
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}>({
  state: initialState,
  dispatch: () => null,
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

// Reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
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
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const user = mockUsers.find((user) => user.email === email);
      
      if (user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid credentials' });
      }
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Login failed. Please try again.',
      });
    }
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = mockUsers.find((user) => user.email === email);
      
      if (existingUser) {
        dispatch({
          type: 'SET_ERROR',
          payload: 'User with this email already exists',
        });
        return;
      }
      
      // Create new user
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        role: 'user',
        createdEvents: [],
        registeredEvents: [],
      };
      
      dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Registration failed. Please try again.',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext);