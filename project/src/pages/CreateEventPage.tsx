
const CriarEventoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Criar Novo Evento</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
              Título do Evento
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite o título do evento"
            />
          </div>
          
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite a descrição do evento"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="data" className="block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                type="date"
                id="data"
                name="data"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
                Horário
              </label>
              <input
                type="time"
                id="horario"
                name="horario"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="local" className="block text-sm font-medium text-gray-700">
              Local
            </label>
            <input
              type="text"
              id="local"
              name="local"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite o local do evento"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Criar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CriarEventoPage;