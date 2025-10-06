export class ContatoService {
  
  // Agora o Service RECEBE o repositório. Ele não o cria mais.
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;
  }


  getAllContatos() {
    return this.contatoRepository.findAll();
  }

  getContatoById(id) {
    return this.contatoRepository.findById(id);
  }

  createContato(contatoData) {
    // No futuro, regras de negócio como "verificar email duplicado"
    // viveriam aqui, ANTES de chamar o repositório.
    return this.contatoRepository.create(contatoData);
  }

  updateContato(id, contatoData) {
    return this.contatoRepository.update(id, contatoData);
  }

  deleteContato(id) {
    return this.contatoRepository.remove(id);
  }
}