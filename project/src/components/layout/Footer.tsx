import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AcadEvent</span>
            </div>
            <p className="text-gray-400 mb-4">
              A principal plataforma para organizar e descobrir eventos acadêmicos. 
              Conecte-se com pesquisadores, estudantes e profissionais da sua área.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">Todos os Eventos</Link>
              </li>
              <li>
                <Link to="/create-event" className="text-gray-400 hover:text-white transition-colors">Criar Evento</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">Entrar</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">Cadastrar-se</Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias de Eventos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events?category=Conference" className="text-gray-400 hover:text-white transition-colors">Conferências</Link>
              </li>
              <li>
                <Link to="/events?category=Workshop" className="text-gray-400 hover:text-white transition-colors">Workshops</Link>
              </li>
              <li>
                <Link to="/events?category=Symposium" className="text-gray-400 hover:text-white transition-colors">Simpósios</Link>
              </li>
              <li>
                <Link to="/events?category=Lecture" className="text-gray-400 hover:text-white transition-colors">Palestras</Link>
              </li>
              <li>
                <Link to="/events?category=Colloquium" className="text-gray-400 hover:text-white transition-colors">Colóquios</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
                <span className="text-gray-400">123 Rua Acadêmica, São Paulo, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">contato@acadevent.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AcadEvent. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Serviço
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;