import { ContatoController } from '../controllers/contato.controller.js';

const contatoController = new ContatoController();

export async function contatoRoutes(fastify, options) {
    
  fastify.get('/contatos', 
	  (request, reply) => contatoController.getContatos(request, reply));

  fastify.get('/contatos/:id', 
	  (request, reply) => contatoController.getContatoById(request, reply));

  fastify.post('/contatos', 
	  (request, reply) => contatoController.createContato(request, reply));

  fastify.put('/contatos/:id', 
	  (request, reply) => contatoController.updateContato(request, reply));

  fastify.delete('/contatos/:id', 
	  (request, reply) => contatoController.deleteContato(request, reply));
}