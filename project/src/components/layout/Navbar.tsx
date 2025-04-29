import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Calendar, LogOut } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, logout } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <Calendar className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AcadEvent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Eventos
            </Link>
            <Link 
              to="/create-event" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Crie Seu Evento 
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 text-sm"
              />
            </div>
            
            {state.isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>{state.user?.name.split(' ')[0]}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    {state.user?.profileImageUrl ? (
                      <img 
                        src={state.user.profileImageUrl} 
                        alt={state.user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-full h-full p-1 text-gray-600" />
                    )}
                  </div>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden origin-top-right scale-0 group-hover:scale-100 transition-transform duration-200 ease-out z-50">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</Link>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Events
            </Link>
            <Link 
              to="/create-event" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Create Event
            </Link>
            <div className="relative py-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            {state.isAuthenticated ? (
              <div className="border-t border-gray-100 pt-3 mt-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    {state.user?.profileImageUrl ? (
                      <img 
                        src={state.user.profileImageUrl} 
                        alt={state.user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-full h-full p-2 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{state.user?.name}</p>
                    <p className="text-sm text-gray-500">{state.user?.email}</p>
                  </div>
                </div>
                <Link to="/profile" className="block py-2 text-gray-700 hover:text-blue-600">Profile</Link>
                <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center space-x-2 text-red-600 hover:text-red-800 py-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 border-t border-gray-100 pt-3 mt-2">
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium py-2">
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;