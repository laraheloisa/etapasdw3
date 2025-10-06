# Etapa 3 – Desacoplando com Injeção de Dependência (DI)

Depois de aplicar o padrão Service e Repository, percebi que as camadas ainda estavam **fortemente acopladas**.  
O `Controller` criava o `Service`, e o `Service` criava o `Repository`, o que deixava o sistema rígido e difícil de testar ou modificar.

Para resolver isso, aprendi sobre a **Injeção de Dependência (DI)**, um padrão que permite **passar as dependências de fora**, em vez de criá-las dentro das classes.  
Com isso, as camadas ficam **independentes** e podem receber qualquer implementação — como trocar peças de LEGO.

Por exemplo:
- O **Controller** agora recebe o **Service** pronto, sem precisar instanciá-lo.  
- O **Service** recebe o **Repository** como parâmetro, podendo usar versões diferentes (em memória, banco de dados real, etc.).  

Esse conceito faz parte do princípio de **Inversão de Controle (IoC)**, que significa que as classes deixam de controlar suas próprias dependências — quem decide isso é o código que as usa.

**O que melhorou:**
- O código ficou **mais flexível** e fácil de modificar.  
- É possível **testar cada camada isoladamente**.  
- O acoplamento entre as classes foi reduzido drasticamente.

**Conclusão:**  
Com a Injeção de Dependência, o sistema ficou muito mais profissional e modular. Agora é possível trocar implementações e testar partes específicas sem mexer no restante do código.
