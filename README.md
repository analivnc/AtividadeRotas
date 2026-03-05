# Projeto Angular – Lista e Detalhe de Usuários

# O que é rota dinâmica:
Rota dinâmica no Angular é uma rota que utiliza parâmetros na URL (como :id) para carregar conteúdos diferentes
usando o mesmo componente, tornando a aplicação mais organizada, reutilizável e escalável.

# O que é paramMap:
O paramMap no Angular é utilizado para acessar os parâmetros de rotas dinâmicas. 
Ele permite capturar valores da URL (como :id) dentro do componente, possibilitando
buscar dados específicos, como detalhes de um usuário ou produto.

# Onde você usou observable e por quê?
**Eu utilizei o Observable nos métodos listarUsuarios() e buscarUsuarioPorId().
No método listarUsuarios(), o retorno é do tipo Observable<User[]>, pois ele faz uma requisição HTTP para buscar todos os usuários da API, retornando uma lista.
No método buscarUsuarioPorId(id: number), o retorno é Observable<User>, pois ele faz uma requisição para buscar apenas um usuário específico com base no ID informado.
O Observable foi utilizado porque as requisições HTTP no Angular são assíncronas, ou seja, a resposta da API não chega imediatamente. 
O Angular utiliza o Observable para esperar a resposta chegar e permitir que o código execute uma ação quando os dados estiverem disponíveis, normalmente por meio do subscribe().
Além disso, o Observable facilita o tratamento de erros e o controle das requisições, sendo o padrão utilizado pelo HttpClient no Angular.
**

