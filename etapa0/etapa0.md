# Etapa 0 – Tudo Junto e Misturado

Criei um CRUD de contatos em um único arquivo (`server.js`) usando Fastify.  
Funcionou rápido e foi fácil de ver rodando, mas percebi problemas:

- Arquivo cresce e fica difícil de manter.  
- Muitas responsabilidades misturadas.  
- Código repetido em várias rotas.  
- Difícil de testar isoladamente.  
- Zero reutilização de lógica.  

Conclusão: bom para começar e aprender, mas inviável em projetos maiores.
