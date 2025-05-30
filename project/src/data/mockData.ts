import { Event, User, EventRegistration } from '../types';

export const eventosMock: Event[] = [
  {
    id: '1',
    title: 'Conferência Internacional de Ciência da Computação',
    description: 'Junte-se a nós na principal conferência sobre avanços em ciência da computação e inteligência artificial. Especialistas líderes de todo o mundo apresentarão pesquisas de ponta e tecnologias inovadoras. Faça networking com profissionais, acadêmicos e estudantes da área.',
    shortDescription: 'Principal conferência sobre avanços em ciência da computação e IA',
    startDate: '2025-03-15T09:00:00Z',
    endDate: '2025-03-17T18:00:00Z',
    location: 'Centro de Pesquisa Universitário, São Paulo',
    isOnline: false,
    category: 'Conference',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    organizer: 'Associação Brasileira de Ciência da Computação',
    organizerId: 'org-1',
    price: 450,
    isFree: false,
    capacity: 500,
    registrations: 325,
    tags: ['Ciência da Computação', 'IA', 'Pesquisa', 'Tecnologia'],
    createdAt: '2024-10-01T14:23:10Z',
  },
  {
    id: '2',
    title: 'Workshop sobre Práticas de Engenharia Sustentável',
    description: 'Este workshop intensivo concentra-se na integração de práticas sustentáveis em projetos de engenharia. Aprenda técnicas práticas para reduzir o impacto ambiental mantendo a eficiência do projeto. As sessões práticas abordarão avaliação do ciclo de vida, seleção de materiais ecológicos e princípios de design sustentável.',
    shortDescription: 'Workshop intensivo sobre sustentabilidade na engenharia',
    startDate: '2025-02-10T10:00:00Z',
    endDate: '2025-02-11T17:00:00Z',
    location: 'Auditório da Escola de Engenharia, Rio de Janeiro',
    isOnline: false,
    category: 'Workshop',
    imageUrl: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg',
    organizer: 'Sociedade Brasileira de Engenharia',
    organizerId: 'org-2',
    price: 350,
    isFree: false,
    capacity: 150,
    registrations: 98,
    tags: ['Engenharia', 'Sustentabilidade', 'Meio Ambiente', 'Workshop'],
    createdAt: '2024-09-15T09:12:35Z',
  },
  {
    id: '3',
    title: 'Simpósio de Pesquisa Médica',
    description: 'Simpósio anual que reúne pesquisadores médicos, profissionais e estudantes para discutir avanços na ciência médica. Apresenta palestrantes principais, painéis de discussão e oportunidades de networking. Foco especial em doenças infecciosas emergentes e intervenções em saúde pública.',
    shortDescription: 'Simpósio anual sobre pesquisa e avanços médicos',
    startDate: '2025-04-05T08:30:00Z',
    endDate: '2025-04-07T17:30:00Z',
    location: 'Prédio de Ciências Médicas, Belo Horizonte',
    isOnline: false,
    category: 'Symposium',
    imageUrl: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
    organizer: 'Associação Médica Brasileira',
    organizerId: 'org-3',
    price: 550,
    isFree: false,
    capacity: 300,
    registrations: 187,
    tags: ['Medicina', 'Pesquisa', 'Saúde', 'Saúde Pública'],
    createdAt: '2024-09-28T16:45:22Z',
  },
  {
    id: '4',
    title: 'Série de Palestras Virtuais em Humanidades',
    description: 'Participe da nossa série de palestras virtuais explorando a interseção entre humanidades e sociedade moderna. Cada sessão conta com renomados acadêmicos apresentando tópicos que vão desde literatura e filosofia até estudos culturais e humanidades digitais. Sessões de perguntas e respostas seguem cada apresentação.',
    shortDescription: 'Série de palestras online sobre humanidades e sociedade moderna',
    startDate: '2025-01-20T19:00:00Z',
    endDate: '2025-02-24T21:00:00Z',
    location: 'Online',
    isOnline: true,
    category: 'Lecture',
    imageUrl: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg',
    organizer: 'Instituto Nacional de Humanidades',
    organizerId: 'org-4',
    price: 0,
    isFree: true,
    capacity: 1000,
    registrations: 634,
    tags: ['Humanidades', 'Literatura', 'Filosofia', 'Cultura', 'Online'],
    createdAt: '2024-08-30T10:18:43Z',
  },
  {
    id: '5',
    title: 'Colóquio de Pesquisa Estudantil',
    description: 'Uma plataforma para estudantes de graduação e pós-graduação apresentarem seus projetos de pesquisa e receberem feedback de professores e colegas. Aberto a todas as disciplinas, este evento promove o crescimento acadêmico e a colaboração interdisciplinar entre acadêmicos emergentes.',
    shortDescription: 'Colóquio para apresentações de pesquisas estudantis',
    startDate: '2025-03-01T13:00:00Z',
    endDate: '2025-03-01T20:00:00Z',
    location: 'Campus Universitário Central, Brasília',
    isOnline: false,
    category: 'Colloquium',
    imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    organizer: 'Conselho Nacional de Pesquisa Estudantil',
    organizerId: 'org-5',
    price: 50,
    isFree: false,
    capacity: 200,
    registrations: 142,
    tags: ['Estudante', 'Pesquisa', 'Acadêmico', 'Interdisciplinar'],
    createdAt: '2024-10-05T11:30:12Z',
  },
  {
    id: '6',
    title: 'Cúpula de Computação Quântica',
    description: 'A Cúpula de Computação Quântica reúne físicos, cientistas da computação e profissionais da indústria líderes para explorar os últimos desenvolvimentos em tecnologia de computação quântica. As sessões cobrem algoritmos quânticos, desenvolvimentos de hardware, aplicações potenciais e o futuro da computação.',
    shortDescription: 'Cúpula sobre avanços e aplicações em computação quântica',
    startDate: '2025-05-12T09:00:00Z',
    endDate: '2025-05-14T18:00:00Z',
    location: 'Centro de Conferências do Parque Tecnológico, Campinas',
    isOnline: false,
    category: 'Summit',
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    organizer: 'Aliança de Pesquisa Quântica',
    organizerId: 'org-6',
    price: 675,
    isFree: false,
    capacity: 250,
    registrations: 183,
    tags: ['Quântica', 'Computação', 'Física', 'Tecnologia'],
    createdAt: '2024-09-20T14:15:36Z',
  },
];

export const usuariosMock: User[] = [
  {
    id: 'user-1',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    role: 'admin',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    createdEvents: ['1', '3'],
    registeredEvents: ['5'],
  },
  {
    id: 'user-2',
    name: 'Maria Souza',
    email: 'maria.souza@email.com',
    role: 'user',
    profileImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdEvents: [],
    registeredEvents: ['1', '2', '4'],
  },
  {
    id: 'user-3',
    name: 'Pedro Santos',
    email: 'pedro.santos@email.com',
    role: 'user',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    createdEvents: ['2', '6'],
    registeredEvents: ['4'],
  },
];

export const inscricoesMock: EventRegistration[] = [
  {
    id: 'reg-1',
    eventId: '1',
    userId: 'user-2',
    registrationDate: '2024-10-05T09:15:22Z',
    ticketType: 'Padrão',
    ticketPrice: 450,
    status: 'confirmed',
  },
  {
    id: 'reg-2',
    eventId: '2',
    userId: 'user-2',
    registrationDate: '2024-09-28T14:22:10Z',
    ticketType: 'Padrão',
    ticketPrice: 350,
    status: 'confirmed',
  },
  {
    id: 'reg-3',
    eventId: '4',
    userId: 'user-2',
    registrationDate: '2024-09-15T11:45:30Z',
    ticketType: 'Gratuito',
    ticketPrice: 0,
    status: 'confirmed',
  },
  {
    id: 'reg-4',
    eventId: '4',
    userId: 'user-3',
    registrationDate: '2024-09-18T16:30:12Z',
    ticketType: 'Gratuito',
    ticketPrice: 0,
    status: 'confirmed',
  },
  {
    id: 'reg-5',
    eventId: '5',
    userId: 'user-1',
    registrationDate: '2024-10-12T10:10:45Z',
    ticketType: 'Estudante',
    ticketPrice: 50,
    status: 'confirmed',
  },
];

// English aliases
export const mockEvents = eventosMock;
export const mockUsers = usuariosMock;
export const mockRegistrations = inscricoesMock;