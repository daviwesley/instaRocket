# instaRocket
Aplicação que servirá como backend para o instaRocket, tem a capacidade de gravar dados no banco de dados [mongodb](https://www.mongodb.com/cloud/atlas),
armazena as imagens localmente(o ideal seria usar um CDN), responde via protocolo [webSockets](https://en.wikipedia.org/wiki/WebSocket) quando um novo dado é
salvo no banco de dados.


### Rotas
|Método          |URL                            |Descrição                                      |
|----------------|-------------------------------|-----------------------------------------------|
|GET             | localhost/posts               |Retorna todos os posts                         |
|POST            | localhost/posts               |Cria um post                                   |
|POST            | localhost//posts/:id/like     |Dar um curtir em um post especificado pelo `id`|
