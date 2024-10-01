# mini-projeto-fullstack

![Uploading Preto e Amarelo Escuro Gamer Sobrevivência Miniatura para YouTube (1).png…]()



Introdução

Esta documentação descreve a criação de uma API RESTful para gerenciar um catálogo de jogos. A API permite que os usuários realizem operações básicas como adicionar, listar, atualizar e remover jogos. O objetivo é fornecer uma interface simples e intuitiva para a manipulação de dados relacionados a jogos.

Estrutura da API

A API foi construída seguindo princípios REST e está estruturada para facilitar a interação com os dados. Cada recurso (neste caso, jogos) pode ser acessado através de Endpoints específicos, utilizando os métodos HTTP adequados.
Endpoints
A seguir, são listados os principais Endpoints da API, junto com uma breve descrição de suas funcionalidades:

•	| GET | giggagames/v1 | Lista todos os jogos |

•	| GET | giggagames/v1/{id} | Obtém detalhes de um jogo específico |

•	| POST | giggagames/v1 | Adiciona um novo jogo |

•	| PUT | giggagames/v1/{id} | Atualiza um jogo existente |

•	| DELETE | giggagames/v1/{id} | Remove um jogo do catálogo |

Implementação

1.	Tecnologias Utilizadas

Java: Linguagem de programação utilizada para construir a API.

Spring Boot: Framework que facilita a criação de aplicações Java, especialmente para APIs REST.

H2 Database: Banco de dados em memória utilizado para armazenamento dos dados dos jogos.

2.	Configuração do Ambiente

Para configurar o ambiente de desenvolvimento e executar a API, siga os passos abaixo:

Pré-Requisitos:  Java 11 ou superior e Maven 3.6 ou superior


Passos para Instalação

Passo 1:  Clone o repositório:
 	bash
   	git clone https://github.com/seu-usuario/catalogo-jogos.git
   

Passo 2: Navegue até o diretório do projeto:
   	bash
   	cd catalogo-jogos
   

Passo 3: Compile o projeto com Maven:
   	bash
  	mvn clean install
  

Passo 4: Execute a aplicação:
   	bash
   	mvn spring-boot: run
  

Passo 5: Acesse a API em: `http://localhost:8080/api/jogos`

3.	Estrutura de Dados

Os dados dos jogos são representados pela seguinte estrutura:

json
{
    "id": 1,
    "titulo": "The Witcher 3",
    "genero": "RPG",
    "plataforma": "PC",
    "anoLancamento": 2015
}

4.	Exemplos de Requisição

•	Listar todos os jogos

http
GET /api/jogos HTTP/1.1
Host: localhost:8080

•	Obter um jogo específico

http
GET /api/jogos/1 HTTP/1.1
Host: localhost:8080
•	Adicionar um novo jogo

http
POST /api/jogos HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "titulo": "The Witcher 3",
    "genero": "RPG",
    "plataforma": "PC",
    "anoLancamento": 2015
}

•	Atualizar um jogo existente

http
PUT /api/jogos/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "titulo": "The Witcher 3: Wild Hunt",
    "genero": "RPG",
    "plataforma": "PC",
    "anoLancamento": 2015
}

•	Remover um jogo

http
DELETE /api/jogos/1 HTTP/1.1
Host: localhost:8080

Tratamento de Erros

A API possui um sistema de tratamento de erros que pode retornar os seguintes códigos:
- *400 Bad Request*: Indica que a requisição não foi formatada corretamente.
- *404 Not Found*: Indica que o recurso solicitado (jogo) não foi encontrado.
- *500 Internal Server Error*: Indica que ocorreu um erro inesperado no servidor.

Considerações Finais

Esta documentação fornece um guia completo para a criação e utilização da API de Catálogo de Jogos. Ao seguir as instruções e utilizar os exemplos fornecidos, os desenvolvedores poderão implementar e interagir com a API de maneira eficaz.

Se houver dúvidas ou necessidade de suporte adicional, não hesite em entrar em contato!

Nome dos integrantes
- Salis Silva
- Cayo Arcelino
- Albertho Pedro
- Leonardo Messias
