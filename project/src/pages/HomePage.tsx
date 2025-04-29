import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Users, Award, BookOpen } from 'lucide-react';
import { useEventContext } from '../context/EventContext';
import EventCard from '../components/events/EventCard';

const PaginaInicial: React.FC = () => {
  const { state } = useEventContext();
  const { featuredEvents: eventosDestacados } = state;

  return (
    <div className="pt-16">
      {/* Seção Principal */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Descubra e Participe de Eventos Acadêmicos
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Encontre conferências, workshops e seminários na sua área.
              Conecte-se com pesquisadores e especialistas de todo o mundo.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar eventos..."
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                  Buscar Eventos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explorar por Categoria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore eventos acadêmicos por categoria para encontrar a oportunidade perfeita de aprendizado,
              networking e avanço do seu conhecimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/events?category=Conference" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="bg-blue-100 p-6 flex justify-center">
                <Calendar className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Conferências</h3>
                <p className="text-gray-600">Grandes encontros acadêmicos com múltiplas apresentações e palestrantes</p>
              </div>
            </Link>
            
            <Link 
              to="/events?category=Workshop" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="bg-purple-100 p-6 flex justify-center">
                <Users className="h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Workshops</h3>
                <p className="text-gray-600">Sessões interativas focadas no desenvolvimento de habilidades específicas</p>
              </div>
            </Link>
            
            <Link 
              to="/events?category=Symposium" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="bg-teal-100 p-6 flex justify-center">
                <Award className="h-16 w-16 text-teal-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Simpósios</h3>
                <p className="text-gray-600">Discussões focadas em tópicos específicos de pesquisa</p>
              </div>
            </Link>
            
            <Link 
              to="/events?category=Lecture" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="bg-amber-100 p-6 flex justify-center">
                <BookOpen className="h-16 w-16 text-amber-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Palestras</h3>
                <p className="text-gray-600">Apresentações ministradas por especialistas em tópicos específicos</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Eventos Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Eventos Destacados</h2>
            <Link 
              to="/events" 
              className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center"
            >
              Ver Todos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventosDestacados.map((evento, index) => (
              <EventCard key={evento.id} event={evento} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Hospedar Seu Evento Acadêmico?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Crie e gerencie seu evento acadêmico em nossa plataforma. Alcance um público maior,
            simplifique as inscrições e foque no que mais importa - seu conteúdo.
          </p>
          <Link 
            to="/create-event"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-md transition-colors"
          >
            Criar Evento
          </Link>
        </div>
      </section>

      {/* Seção de Depoimentos/Estatísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Que Escolher o AcadEvent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Junte-se a milhares de acadêmicos que confiam em nossa plataforma para suas necessidades de gestão de eventos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">500+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Eventos Realizados</div>
              <p className="text-gray-600">
                Mais de 500 eventos acadêmicos foram realizados em nossa plataforma
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">50.000+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Participantes</div>
              <p className="text-gray-600">
                Conectando pesquisadores, professores e estudantes de todo o mundo
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-blue-600 text-4xl font-bold mb-2">200+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Instituições</div>
              <p className="text-gray-600">
                Universidades e instituições de pesquisa confiam em nossa plataforma
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicial;