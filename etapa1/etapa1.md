# Etapa 1 – O Padrão MVC e o “Fat Model”

Reestruturei o projeto aplicando o padrão **MVC (Model-View-Controller)** para organizar melhor o código.  
Agora, em vez de tudo ficar em um único arquivo, o sistema está dividido em camadas:

- **Model:** lida com os dados e as regras de negócio.  
- **Controller:** recebe as requisições, chama o Model e retorna as respostas.  
- **View:** no caso da API, é o formato em que os dados são enviados (geralmente JSON).

Aprendi também sobre o conceito de **“Fat Model”**, que defende concentrar a lógica principal no Model, deixando o Controller mais simples e limpo.

Conclusão: o padrão MVC trouxe organização, clareza e facilitou a manutenção do código, tornando o projeto mais profissional e preparado para crescer.
