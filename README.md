Projeto Angular – Lista e Detalhe de Usuários

Este projeto foi desenvolvido utilizando Angular com o objetivo de praticar rotas dinâmicas, uso de paramMap, consumo de API e utilização de Observable.

O sistema realiza a listagem de usuários consumindo dados de uma API pública e permite visualizar os detalhes de cada usuário por meio de uma rota dinâmica.

Tecnologias utilizadas:

Angular

TypeScript

HTML

CSS

API pública JSONPlaceholder

Funcionalidades:

O projeto possui uma tela de listagem de usuários, onde os dados são buscados através do HttpClient. Ao selecionar um usuário, a aplicação navega para uma rota dinâmica no formato /usuario/:id.

Essa rota utiliza um parâmetro dinâmico (id), que é capturado no componente através do paramMap. Com esse id, é feita uma nova requisição à API para buscar as informações específicas do usuário selecionado.

Conceitos aplicados:

Rota Dinâmica:
Permite criar uma única rota capaz de atender diferentes usuários, alterando apenas o valor do parâmetro na URL.

paramMap:
Utilizado para capturar o parâmetro da rota e extrair o valor do id presente na URL.

Observable:
Utilizado nos métodos do serviço para realizar requisições HTTP de forma assíncrona. Como as chamadas à API retornam dados futuramente, o Observable permite que o Angular aguarde e trate essas respostas corretamente.

Estrutura do projeto:

O projeto está organizado em páginas, serviços e modelos, separando responsabilidades para manter o código limpo e estruturado.

Objetivo do projeto:

Praticar navegação entre rotas, captura de parâmetros dinâmicos, consumo de API e organização de aplicações Angular utilizando boas práticas.

Desenvolvido por Ana Lívia Neves Correia.
