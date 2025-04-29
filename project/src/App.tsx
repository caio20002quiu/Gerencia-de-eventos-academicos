import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import CreateEventPage from './pages/CreateEventPage';
import DashboardPage from "./pages/HomePage"; // Alterado para HomePage
import ProfilePage from "./pages/HomePage"; // Se você quiser usar HomePage em vez de ProfilePage
import LoginPage from "./pages/HomePage";   // Se você quiser usar HomePage em vez de LoginPage
import RegisterPage from "./pages/HomePage"; // Se você quiser usar HomePage em vez de RegisterPage 
import { EventProvider } from './context/EventContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <EventProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventDetailPage />} />
                <Route path="/create-event" element={<CreateEventPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </EventProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;