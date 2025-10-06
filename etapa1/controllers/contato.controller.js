// o Controller precisa importar o Model diretamente.
import { ContatoModel } from '../models/contato.model.js';

export class ContatoController {
  
  constructor() {
    this.contatoModel = new ContatoModel();
  }

  async getContatos(request, reply) {
    const contatos = this.contatoModel.findAll();
    return reply.send(contatos);
  }

  async getContatoById(request, reply) {
    const { id } = request.params;
    const contato = this.contatoModel.findById(id);

    if (!contato) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contato);
  }

  async createContato(request, reply) {
    const novoContato = this.contatoModel.create(request.body);
    return reply.code(201).send(novoContato);
  }

  async updateContato(request, reply) {
    const { id } = request.params;
    const contatoAtualizado = this.contatoModel.update(id, request.body);

    if (!contatoAtualizado) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contatoAtualizado);
  }

  async deleteContato(request, reply) {
    const { id } = request.params;
    const sucesso = this.contatoModel.remove(id);

    if (!sucesso) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.code(204).send(); // 204 No Content
  }
}