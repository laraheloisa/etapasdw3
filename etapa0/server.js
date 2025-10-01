import fastify from 'fastify';

const server = fastify({ logger: true });
const port = 3000;

// --- Banco de Dados em Memória ---
const contatos = [];
let nextId = 1;

// --- ROTAS E TODA A LÓGICA ---

// GET - Listar todos os contatos
server.get('/contatos', (request, reply) => {
  reply.send(contatos);
});

// GET - Buscar um único contato por ID
server.get('/contatos/:id', (request, reply) => {
  const id = parseInt(request.params.id);
  const contato = contatos.find(c => c.id === id);

  if (!contato) {
    return reply.code(404).send({ message: 'Contato não encontrado' });
  }
  reply.send(contato);
});

// POST - Criar um novo contato
server.post('/contatos', (request, reply) => {
  const { nome, telefone, email } = request.body;
  if (!nome || !email) {
    return reply.code(400).send({ message: 'Nome e email são obrigatórios' });
  }

  const novoContato = { id: nextId++, nome, telefone, email };
  contatos.push(novoContato);
  reply.code(201).send(novoContato);
});

// PUT - Atualizar um contato
server.put('/contatos/:id', (request, reply) => {
  const id = parseInt(request.params.id);
  const contatoData = request.body;
  const index = contatos.findIndex(c => c.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: 'Contato não encontrado' });
  }

  contatos[index] = { ...contatos[index], ...contatoData };
  reply.send(contatos[index]);
});

// DELETE - Remover um contato
server.delete('/contatos/:id', (request, reply) => {
  const id = parseInt(request.params.id);
  const index = contatos.findIndex(c => c.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: 'Contato não encontrado' });
  }

  contatos.splice(index, 1);
  reply.code(204).send();
});

// --- Iniciar o Servidor ---
server.listen({ port }, (error) => {    
	if (error) {        
		console.error("Erro ao iniciar o servidor:", error)
		process.exit(1)
	}    
	console.log("Servidor executando na porta ", port);
})