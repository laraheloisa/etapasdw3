// 1. O arquivo de rotas importa todas as suas dependências.
import { ContatoRepository } from '../repositories/contato.repository.js';
import { ContatoService } from '../services/contato.service.js';
import { ContatoController } from '../controllers/contato.controller.js';

// 2. A "linha de montagem" para o módulo de contatos acontece aqui.
const contatoRepository = new ContatoRepository();
const contatoService = new ContatoService(contatoRepository);
const contatoController = new ContatoController(contatoService);

export async function contatoRoutes(fastify, options) {
  
	// 3. As definições de rota usam o controller já montado.
  fastify.get('/contatos', (request, reply) => 
    contatoController.getContatos(request, reply)
  );
  fastify.get('/contatos/:id', (request, reply) => 
    contatoController.getContatoById(request, reply)
  );
  fastify.post('/contatos', (request, reply) => 
    contatoController.createContato(request, reply)
  );
  fastify.put('/contatos/:id', (request, reply) => 
    contatoController.updateContato(request, reply)
  );
  fastify.delete('/contatos/:id', (request, reply) => 
    contatoController.deleteContato(request, reply)
  );
}