# Etapa 2 – A Evolução: Service e Repository (com Acoplamento Forte)

Percebi que o **Model** da etapa anterior estava ficando sobrecarregado, pois cuidava tanto das regras de negócio quanto do acesso aos dados.  
Para resolver isso, separei essas responsabilidades em duas novas camadas: **Service** e **Repository**.

- **Repository:** é responsável apenas por acessar os dados (buscar, salvar, atualizar, deletar).  
- **Service:** concentra as regras de negócio, chamando o Repository quando precisa lidar com os dados.

Com isso, o **Controller** passou a depender do **Service**, e o **Service** depende do **Repository**, criando uma cadeia de comunicação mais organizada.  
Essa estrutura segue o **Princípio da Responsabilidade Única**, deixando cada parte do código com uma função bem definida.

**O que melhorou:**
- O código ficou mais limpo e fácil de entender.  
- As responsabilidades estão claramente separadas.  
- O antigo “Fat Model” foi resolvido.

**Mas ainda há um problema:**  
As dependências estão fortemente acopladas. O `Controller` cria o `Service`, e o `Service` cria o `Repository`. Isso dificulta testar as partes separadamente e trocar implementações no futuro (por exemplo, mudar o tipo de banco de dados).

**Conclusão:**  
Essa etapa foi um grande avanço em organização e clareza, mas revelou a necessidade de tornar o sistema mais flexível — algo que será resolvido com a próxima evolução: a **Injeção de Dependência**.
