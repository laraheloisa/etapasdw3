import { randomUUID } from 'node:crypto';

export class ContatoModel {
  #contatos = [];
  
  findAll() {
    return this.#contatos;
  }

  findById(id) {
    return this.#contatos.find(c => c.id === id);
  }

  create(contatoData) {
    const novoContato = { id: randomUUID(), ...contatoData };
    this.#contatos.push(novoContato);
    return novoContato;
  }

  update(id, contatoData) {
    const index = this.#contatos.findIndex(c => c.id === id);
    
    if (index === -1) {
      return null;
    }
    
    this.#contatos[index] = { ...this.#contatos[index], ...contatoData };
    return this.#contatos[index];
  }

  remove(id) {
    const index = this.#contatos.findIndex(c => c.id === id);
    
    if (index === -1) {
      return false;
    }
    
    this.#contatos.splice(index, 1);
    return true;
  }
}