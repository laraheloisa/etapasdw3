import { ContatoService } from '../services/contato.service.js';

export class ContatoController {
  
  // O Controller está "amarrado" à implementação do ContatoService.
  constructor() {
    this.contatoService = new ContatoService();
  }

  async getContatos(request, reply) {
    const contatos = this.contatoService.getAllContatos();
    return reply.send(contatos);
  }

  async getContatoById(request, reply) {
    const { id } = request.params;
    const contato = this.contatoService.getContatoById(id);

    if (!contato) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contato);
  }

  async createContato(request, reply) {
    const novoContato = this.contatoService.createContato(request.body);
    return reply.code(201).send(novoContato);
  }

  async updateContato(request, reply) {
    const { id } = request.params;
    const contatoAtualizado = this.contatoService.updateContato(id, request.body);

    if (!contatoAtualizado) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contatoAtualizado);
  }

  async deleteContato(request, reply) {
    const { id } = request.params;
    const sucesso = this.contatoService.deleteContato(id);

    if (!sucesso) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.code(204).send();
  }
}