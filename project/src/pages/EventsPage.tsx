import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Calendar } from 'lucide-react';
import { useEventContext } from '../context/EventContext';
import EventCard from '../components/events/EventCard';
import { Event } from '../types';

const PaginaEventos: React.FC = () => {
  const { state } = useEventContext();
  const { events: eventos } = state;
  const location = useLocation();
  const [eventosFiltrados, setEventosFiltrados] = useState<Event[]>(eventos);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [mostrarApenasGratuitos, setMostrarApenasGratuitos] = useState(false);
  const [mostrarApenasOnline, setMostrarApenasOnline] = useState(false);

  // Obtém categoria dos parâmetros da URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoria = params.get('category');
    if (categoria) {
      setCategoriaSelecionada(categoria);
    }
  }, [location.search]);

  // Filtra eventos baseado na pesquisa e filtros
  useEffect(() => {
    let resultado = eventos;
    
    // Termo de pesquisa
    if (termoPesquisa) {
      const termo = termoPesquisa.toLowerCase();
      resultado = resultado.filter(evento => 
        evento.title.toLowerCase().includes(termo) || 
        evento.description.toLowerCase().includes(termo) ||
        evento.tags.some(tag => tag.toLowerCase().includes(termo))
      );
    }
    
    // Filtro de categoria
    if (categoriaSelecionada) {
      resultado = resultado.filter(evento => evento.category === categoriaSelecionada);
    }
    
    // Filtro de eventos gratuitos
    if (mostrarApenasGratuitos) {
      resultado = resultado.filter(evento => evento.isFree);
    }
    
    // Filtro de eventos online
    if (mostrarApenasOnline) {
      resultado = resultado.filter(evento => evento.isOnline);
    }
    
    setEventosFiltrados(resultado);
  }, [eventos, termoPesquisa, categoriaSelecionada, mostrarApenasGratuitos, mostrarApenasOnline]);

  // Limpar todos os filtros
  const limparFiltros = () => {
    setTermoPesquisa('');
    setCategoriaSelecionada('');
    setMostrarApenasGratuitos(false);
    setMostrarApenasOnline(false);
  };

  const categorias = [
    'Conferência', 'Workshop', 'Simpósio', 'Palestra', 'Colóquio', 'Cúpula'
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Eventos Acadêmicos</h1>
          <p className="text-gray-600">
            Descubra e inscreva-se em eventos acadêmicos de todas as áreas
          </p>
        </div>

        {/* Pesquisa e Filtros */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar eventos..."
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors flex items-center justify-center"
            >
              <Search className="h-4 w-4 mr-2" />
              Pesquisar
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-gray-700 font-medium">Filtros:</span>
            </div>
            
            <div className="relative">
              <select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option value="">Todas as Categorias</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={mostrarApenasGratuitos}
                onChange={() => setMostrarApenasGratuitos(!mostrarApenasGratuitos)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="text-gray-700">Eventos Gratuitos</span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={mostrarApenasOnline}
                onChange={() => setMostrarApenasOnline(!mostrarApenasOnline)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="text-gray-700">Eventos Online</span>
            </label>
            
            {(termoPesquisa || categoriaSelecionada || mostrarApenasGratuitos || mostrarApenasOnline) && (
              <button
                onClick={limparFiltros}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Limpar Filtros
              </button>
            )}
          </div>
        </div>

        {/* Contagem de resultados */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">{eventosFiltrados.length}</span> eventos
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Ordenar por:</span>
            <select className="bg-white border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-sm">
              <option value="date-asc">Data (Próximos)</option>
              <option value="date-desc">Data (Passados)</option>
              <option value="price-asc">Preço (Menor para Maior)</option>
              <option value="price-desc">Preço (Maior para Menor)</option>
            </select>
          </div>
        </div>

        {/* Grade de eventos */}
        {eventosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosFiltrados.map((evento) => (
              <EventCard key={evento.id} event={evento} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nenhum Evento Encontrado</h3>
            <p className="text-gray-600 mb-6">
              Não encontramos eventos que correspondam aos seus critérios.
              Tente ajustar seus filtros ou termo de pesquisa.
            </p>
            <button
              onClick={limparFiltros}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Paginação */}
        {eventosFiltrados.length > 0 && (
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                Anterior
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                Próxima
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginaEventos;