# Star Trek API

A **Star Trek API** fornece dados sobre personagens, naves e planetas do universo de _Star Trek_. Com ela, você pode acessar informações detalhadas sobre diversos aspectos do universo Star Trek através de simples requisições HTTP.

## Tecnologias Usadas

- Node.js para o backend.
- Express para a criação da API.
- JSON para o formato de dados.
- Vercel para deploy da aplicação.

## URL Base

A URL base para a API é:

## [https://api-star-trek.vercel.app/](https://api-star-trek.vercel.app/)

## Endpoints

### 1. **GET /api/characters**

Retorna uma lista de todos os personagens.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "nome": "James T. Kirk",
    "especie": "Humano",
    "origem": "Terra",
    "idade": 34,
    "biografia": "O Capitão James T. Kirk é o comandante da USS Enterprise, conhecido por suas estratégias ousadas e carisma.",
    "habilidades": ["Liderança", "Combate", "Táticas"],
    "aparicoes": ["Star Trek: A Série Clássica", "Star Trek II: A Ira de Khan"],
    "aliados": ["Spock", "Leonard McCoy", "Nyota Uhura"],
    "inimigos": ["Khan Noonien Singh", "Império Klingon", "Romulanos"]
  },
  ...
]
```

### 2. **GET /api/characters/:id**

Retorna um personagem específico com base no ID.

**Exemplo de resposta:**

```json
{
  "id": 4,
  "nome": "Nyota Uhura",
  "especie": "Humana",
  "origem": "Terra",
  "idade": 29,
  "biografia": "A Tenente Uhura é a oficial de comunicações da USS Enterprise, destacando-se por suas habilidades linguísticas.",
  "habilidades": ["Linguística", "Comunicação", "Tecnologia"],
  "aparicoes": [
    "Star Trek: A Série Clássica",
    "Star Trek VI: A Terra Desconhecida"
  ],
  "aliados": ["James T. Kirk", "Spock"],
  "inimigos": ["Império Klingon"]
}
```

### 3. **GET /api/ships**

Retorna uma lista de todas as naves.

**Exemplo de resposta:**

```json

[
  {
    "id": 7,
    "nome": "USS Appalachia",
    "classe": "Steamrunner",
    "numero_registro": "NCC-52136",
    "descricao": "Em meados do ano 2373, várias naves estelares classe Steamrunner lutaram na Frota de Defesa contra os Borg na Batalha do Setor 001. Dentre estas naves estava a USS Appalachia."
  },
  ...
]
```

### 4. GET **/api/ships/:id**

Retorna uma nave específica com base no ID.

**Exemplo de resposta:**

```json
{
  "id": 111,
  "nome": "USS Renegade",
  "classe": "New Orleans",
  "numero_registro": "NCC-63102",
  "descricao": "A USS Renegade foi uma das naves que encontrou a Enterprise-D em Dytallix B quando uma inteligência alienígena tentava tomar o Comando da Frota Estelar em 2364."
}
```

### 5. GET /api/planets

Retorna uma lista de todos os planetas.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "nome": "Terra",
    "descricao": "O planeta natal da humanidade, localizado no Sistema Solar, é conhecido por sua biodiversidade e importância no desenvolvimento da civilização humana."
  },
  ...
]
```
