import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Tag, Share2, Heart, ExternalLink, ChevronRight, CheckCircle } from 'lucide-react';
import { useEventContext } from '../context/EventContext';
import { useAuthContext } from '../context/AuthContext';
import { formatDateRange } from '../utils/formatDate';

const PaginaDetalhesEvento: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state: eventState, dispatch } = useEventContext(); // Modificado aqui
  const { state: authState } = useAuthContext();
  const [estaRegistrando, setEstaRegistrando] = useState(false);
  const [estaCarregando, setEstaCarregando] = useState(true);
  
  useEffect(() => {
    // Encontra o evento no nosso estado
    const evento = eventState.events.find(event => event.id === id);
    
    // Se o evento existe, define como atual
    if (evento) {
      dispatch({ type: 'SET_CURRENT_EVENT', payload: evento }); // Modificado aqui
      setEstaCarregando(false);
    }
  }, [id, eventState.events, dispatch]); // Adicionado dispatch às dependências

  const { currentEvent: eventoAtual } = eventState;
  
  if (estaCarregando || !eventoAtual) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const percentualPreenchido = Math.round((eventoAtual.registrations / eventoAtual.capacity) * 100);
  const vagasRestantes = eventoAtual.capacity - eventoAtual.registrations;
  
  const handleRegistro = () => {
    if (!authState.isAuthenticated) {
      // Redirecionar para login
      return;
    }
    
    setEstaRegistrando(true);
    
    // Simula processo de registro
    setTimeout(() => {
      setEstaRegistrando(false);
    }, 1500);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="bg-gray-50 py-4 border-b border-gray-200 mb-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Início</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link to="/events" className="text-gray-500 hover:text-blue-600">Eventos</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-700 font-medium">{eventoAtual.title}</span>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:gap-8">
          {/* Conteúdo principal */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="rounded-lg overflow-hidden shadow-md bg-white mb-8">
              <img
                src={eventoAtual.imageUrl}
                alt={eventoAtual.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {eventoAtual.category}
                  </span>
                  {eventoAtual.isFree && (
                    <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Gratuito
                    </span>
                  )}
                  {eventoAtual.isOnline && (
                    <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Online
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{eventoAtual.title}</h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <div className="flex items-center mr-6">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{formatDateRange(eventoAtual.startDate, eventoAtual.endDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{eventoAtual.isOnline ? 'Evento Online' : eventoAtual.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{eventoAtual.registrations} pessoas registradas</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center text-gray-600 hover:text-blue-600">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span className="hidden sm:inline">Compartilhar</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-red-600">
                      <Heart className="h-5 w-5 mr-1" />
                      <span className="hidden sm:inline">Salvar</span>
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre este evento</h2>
                  <p className="text-gray-700 mb-6 whitespace-pre-line">
                    {eventoAtual.description}
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {eventoAtual.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        <Tag className="h-4 w-4 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Organizador</h2>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl mr-4">
                      {eventoAtual.organizer.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{eventoAtual.organizer}</h3>
                      <p className="text-gray-600 text-sm">Organizador do Evento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Local do Evento</h2>
              {eventoAtual.isOnline ? (
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex items-start">
                  <ExternalLink className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Evento Online</h3>
                    <p className="text-gray-600 mb-3">
                      Este evento acontecerá online. Um link para participar será enviado aos participantes registrados.
                    </p>
                    <p className="text-purple-600 text-sm font-medium">
                      Link estará disponível após o registro
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-gray-200 rounded-lg h-64 mb-4">
                    {/* Placeholder do mapa */}
                    <div className="h-full flex items-center justify-center text-gray-500">
                      Mapa interativo será exibido aqui
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{eventoAtual.location}</h3>
                  <p className="text-gray-600">
                    Informações detalhadas do local e direções serão fornecidas aos participantes registrados.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Barra lateral */}
          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md bg-white p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {eventoAtual.isFree ? 'Inscrição Gratuita' : `R$ ${eventoAtual.price.toFixed(2)}`}
              </h2>
              
              <div className="mb-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{formatDateRange(eventoAtual.startDate, eventoAtual.endDate)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>
                    {new Date(eventoAtual.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                    {new Date(eventoAtual.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="h-2 bg-gray-200 rounded-full mb-2">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${percentualPreenchido}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{percentualPreenchido}% preenchido</span>
                  <span>{vagasRestantes} vagas restantes</span>
                </div>
              </div>
              
              {vagasRestantes > 0 ? (
                <button
                  onClick={handleRegistro}
                  disabled={estaRegistrando}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-md text-white font-medium text-lg transition-colors ${
                    estaRegistrando
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {estaRegistrando ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                      Processando...
                    </>
                  ) : (
                    'Inscrever-se Agora'
                  )}
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 px-4 rounded-md bg-gray-300 text-gray-600 font-medium text-lg cursor-not-allowed"
                >
                  Esgotado
                </button>
              )}
              
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-2">A inscrição inclui:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Acesso completo ao evento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Certificado de participação</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Materiais e recursos do evento</span>
                  </li>
                  {!eventoAtual.isOnline && (
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Coffee break durante os intervalos</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDetalhesEvento;