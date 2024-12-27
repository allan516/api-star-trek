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

### 5. GET /civilizations/

Retorna uma lista de todas as civilizações.

**Exemplo de resposta:**

```json
[
   {
    "id": 11,
    "civilizacao": "Espécie 8472",
    "planeta": "O planeta da Espécie 8472 pertence a um universo fluídico, completamente vazio, onde toda forma de vida foi eliminada pela própria espécie. Este universo não é classificado como parte de um sistema solar específico, e não há informações sobre estrelas ou a distância da Terra. A população da espécie é desconhecida, mas se sabe que eles vivem em um estado isolado e não têm interesse em coexistir pacificamente com outras espécies.",
    "fisiologia": "A Espécie 8472 possui uma fisiologia semi-humanóide com cabeça, tronco e membros. Eles têm uma estrutura de corpo exteriormente simétrica, com uma cabeça cônica, tronco alongado e três pernas (uma das quais funciona como uma garra ou pinça). Possuem uma cor de pele que varia de castanho-cinzento a lilás e são altamente imunes a tentativas de assimilação, como as feitas pelos Borgs. Suas células têm uma resistência extraordinária, impedindo a penetração das nano-sondas de assimilação. A espécie é capaz de sobreviver no vácuo do espaço e não parece precisar de oxigênio.",
    "historia": "A primeira vez que a Espécie 8472 foi encontrada pela Federação Unida dos Planetas foi em 2373, no Quadrante Delta, dentro do território Borg. Os Borgs estavam travando uma guerra contra eles e, em uma tentativa de derrotá-los, a Capitã Janeway da USS Voyager fez uma aliança temporária com os Borgs. A espécie 8472 é altamente agressiva e não aceita negociações. Suas naves são feitas de biomassa orgânica e possuem um sistema de auto-regeneração. Em 2375, foi descoberto que a Espécie 8472 estava planejando uma invasão ao Quadrante Alfa. Após uma série de interações com a USS Voyager e os Borgs, houve uma tentativa de paz, mas a espécie 8472 permaneceu em seu universo fluídico.",
  },

  ...
]
```

### 6. GET /civilizations/:id

Retorna uma civilização específica.

**Exemplo de resposta:**

```json
[
   {
    "id": 2,
    "civilizacao": "Bajoriana",
    "planeta": "Bajor é considerado um planeta com governo independente aliado da Federação Unida dos Planetas. Está localizado no Sistema Estelar Bajor, composto por 14 planetas, sendo Bajor um planeta classe M, o maior do sistema. O sistema é próximo à fronteira com o espaço Cardassiano.",
    "fisiologia": "Os Bajorianos são humanoides, bípedes e mamíferos, com narizes que possuem camadas de pele acumulada na parte superior. O coração dos Bajorianos tem um arranjo interno refletido em um eixo horizontal. Eles também são reconhecidos pelos brincos cerimoniais que representam posição social e religiosa.",
    "historia": "Os Bajorianos possuem uma história de 500.000 anos. Foram ocupados pelos Cardassianos entre 2339 e 2369, período que devastou o planeta. Após a ocupação, Bajor conseguiu se reerguer com ajuda da Federação Unida dos Planetas e a descoberta de uma Fenda Espacial próxima, que impulsionou a economia e restaurou a fé dos Bajorianos em sua religião."
  },

  ...
]
```
