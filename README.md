
# Projeto de Visualização de Eventos

Este projeto é uma aplicação desenvolvida com **React** e **TypeScript**, com foco em oferecer uma interface responsiva e interativa para a visualização e gerenciamento de eventos. Ele utiliza **Tailwind CSS** para estilização e **Vite** como bundler, permitindo um desenvolvimento rápido e eficiente.

## Tecnologias Usadas

- **React**: Biblioteca para construção de interfaces de usuário de maneira declarativa e eficiente.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, promovendo um código mais robusto e fácil de manter.
- **Tailwind CSS**: Framework de utilitários CSS para estilização rápida e responsiva.
- **Vite**: Bundler moderno e rápido, utilizado para desenvolvimento e otimização de performance.
- **ESLint**: Ferramenta de análise estática de código para garantir consistência e qualidade.
- **Prettier**: Ferramenta de formatação de código para manter o código consistente.
- **React Router**: Biblioteca para navegação entre páginas.

## Arquitetura do Projeto

A aplicação segue uma arquitetura modular, onde os componentes, contextos, páginas e utilitários são bem definidos, facilitando a manutenção e a escalabilidade do código.

### Estrutura do Projeto

- **node_modules**: Contém todas as dependências do projeto, gerenciadas pelo `npm`.
- **public**: Contém arquivos estáticos como o `index.html` e imagens.
- **src**: Contém o código-fonte da aplicação.
    - **components**: Componentes reutilizáveis da aplicação.
    - **context**: Estado global da aplicação gerido via Context API ou outro mecanismo.
    - **data**: Dados estáticos ou dinâmicos utilizados pela aplicação.
    - **index.css**: Estilos globais aplicados à aplicação.
    - **main.tsx**: Ponto de entrada principal, onde o React é inicializado.
    - **pages**: Contém as páginas da aplicação, mapeando para as rotas.
    - **types**: Tipos TypeScript definidos para garantir a tipagem estática.
    - **utils**: Funções auxiliares e utilitários usados em várias partes do projeto.
    - **vite-env.d.ts**: Definições de tipos específicas para o ambiente Vite.

### Arquitetura de Componentes

Os componentes estão divididos em diretórios de forma a facilitar a reutilização e a separação de responsabilidades. O padrão é seguir a estrutura de componentes **funcionais** e **stateless**, com **props** como entrada e retorno de JSX como saída.

#### Diretório `components/`

- **events/**: Contém componentes relacionados à exibição de eventos.
    - **EventCard.tsx**: Componente responsável por exibir as informações de um evento específico.
    - Responsável por receber as **props** `title`, `date`, `location`, e outras, e renderizar o conteúdo em um formato de cartão estilizado.
    
    **Exemplo de uso**:
    ```tsx
    <EventCard title="Evento Exemplo" date="2025-05-01" location="São Paulo" />
    ```

- **layout/**: Contém os componentes de layout, como barras de navegação e rodapés.
    - **Footer.tsx**: Componente de rodapé da página, utilizado em todas as páginas como uma estrutura fixa.
    - **Navbar.tsx**: Barra de navegação que é usada para a navegação entre diferentes seções ou páginas da aplicação.

#### Diretório `context/`

O diretório `context/` é utilizado para a criação de estados globais que precisam ser compartilhados entre diferentes componentes, utilizando a **React Context API**.

#### Diretório `data/`

Este diretório é utilizado para armazenar dados estáticos ou dinâmicos que a aplicação consome. Exemplo: pode conter informações de eventos ou dados de usuários.

#### Diretório `pages/`

As páginas contêm as diferentes **rotas** da aplicação. Cada arquivo aqui representa uma página e seu respectivo conteúdo. 

---

## Fluxo de Dados e Lógica dos Componentes

A aplicação adota uma abordagem **componente por página**, onde cada página é representada por um componente React. Além disso, a comunicação entre os componentes é feita principalmente através de **props** e **contextos**.

### Componentes Reutilizáveis

- **EventCard.tsx**: O componente `EventCard` é projetado para ser reutilizado em diversas partes da aplicação, como uma lista de eventos ou a exibição de eventos específicos.
    - **Props**:
        - `title`: O título do evento.
        - `date`: A data do evento.
        - `location`: O local do evento.
    - **Função**: O componente renderiza essas informações de forma estilizada.

### Estado Global

A aplicação pode utilizar **React Context** para gerenciar estados globais, como a lista de eventos. Isso permite que os componentes filhos acessem esses dados sem precisar passá-los manualmente através de props.

### Navegação

A navegação é feita através de **React Router** (se presente), onde cada página da aplicação tem sua própria URL associada. O componente `Navbar.tsx` contém links para navegar entre as páginas.

---

## Configurações e Padrões

A aplicação segue os seguintes padrões e convenções de código:

- **Estrutura de Arquivos**: Todos os componentes são armazenados no diretório `src/components`, e os arquivos de páginas ficam em `src/pages`.
- **Hooks**: O uso de hooks como `useState` e `useEffect` é preferido para gerenciar o estado e efeitos colaterais nos componentes.
- **Uso de Context API**: O estado global é gerido usando o **React Context API**, evitando o "prop drilling".
- **Estilização com Tailwind CSS**: A estilização é feita de maneira funcional com o **Tailwind CSS**, utilizando classes utilitárias para controlar layout e estilo.

---

## Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e execute:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   Execute:
   ```bash
   npm run dev
   ```

4. **Abra o navegador** e acesse a URL fornecida, normalmente `http://localhost:3000`.

---

## Expansões e Considerações Futuras

### Expansões

- **Implementar uma API para gerenciamento de eventos**: A aplicação pode ser expandida para integrar com uma API real de gerenciamento de eventos, permitindo CRUD (criar, ler, atualizar, excluir) de eventos.
- **Autenticação**: Adicionar autenticação para permitir que os usuários se registrem e acessem eventos privados.

### Considerações para Desenvolvedores

- **Responsividade**: O projeto utiliza **Tailwind CSS** para garantir que a aplicação seja responsiva e funcione bem em dispositivos móveis e desktops.
- **Manutenção**: A separação de componentes facilita a manutenção e futuras melhorias no código.
