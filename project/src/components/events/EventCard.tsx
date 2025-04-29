import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Tag } from 'lucide-react';
import { Event } from '../../types';
import { formatDate } from '../../utils/formatDate';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, featured = false }) => {
  const porcentagemPreenchida = Math.round((event.registrations / event.capacity) * 100);
  
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
        featured ? 'lg:flex' : ''
      }`}
    >
      <div 
        className={`relative overflow-hidden ${
          featured ? 'lg:w-2/5' : 'h-48'
        }`}
      >
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            {event.category}
          </span>
        </div>
        {event.isFree && (
          <div className="absolute top-0 right-0 m-4">
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              Gratuito
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-5 ${featured ? 'lg:w-3/5' : ''}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
            <Link to={`/events/${event.id}`}>
              {event.title}
            </Link>
          </h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {event.shortDescription}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" />
            <span>{formatDate(event.startDate)}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span>{event.isOnline ? 'Evento Online' : event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="h-4 w-4 mr-2 text-blue-600" />
            <span>{event.registrations} / {event.capacity} inscritos</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${porcentagemPreenchida}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{porcentagemPreenchida}% preenchido</span>
            <span>{event.capacity - event.registrations} vagas restantes</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {event.isFree ? 'Gratuito' : `R$ ${event.price.toFixed(2)}`}
          </span>
          <Link 
            to={`/events/${event.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Ver Evento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;