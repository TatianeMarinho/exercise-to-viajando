# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

Foi desenvolvido três componentes: `Header`, `Card` e `CardList`, que serão utilizados para renderizar as informações sobre as cidades.

Os componentes foram criados dentro da pasta nomeada `components`.

</details>

<details>
  <summary><strong> Habilidades</strong></summary><br />
  
- Criar componentes React reutilizáveis.

- Renderizar as informações recebidas via props, com a tipagem correta.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

# Requisitos Obrigatórios

## 1 - Crie o componente `<Header />`

- Este arquivo precisa ser criado na pasta `src/components`.

- Este componente deve ser utilizado no `App` para renderizar uma tag `h1` com o texto 'Tô viajando?'.

**_Aviso_**: Não se esqueça de exportar esse componente.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- O componente tem uma tag `h1` com o texto 'Tô viajando?'.

- O componente `<Header />` está sendo renderizado no App corretamente.

</details>

---

## 2 - Crie o componente `<Card />`

- Este arquivo precisa ser criado na pasta `src/components`.

- O `Card` deve conter a prop `cityInfo`. Nela, deve haver as chaves do tipo string `city`, `country` e `imageUrl`, todas elas obrigatórias, e a chave do tipo boolean `visited`, que é opcional.

- O `Card` deve renderizar o nome da cidade e o país em que se localiza.
  
- A imagem deve ser renderizada com a prop `city` como alt.
  
- Renderize a mensagem "Já Fui!" caso a prop `visited` seja true. Caso contrário, renderize a mensagem "Não Fui."

<br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- O componente renderiza as informações de uma cidade já visitada corretamente.

- Ao não passar a chave "visited" na prop "cityInfo", o componente renderiza a mensagem "Não Fui." ao invés de "Já Fui!".

</details>

---

## 3 - Crie o componente `<CardList />`

- Agora, você deverá renderizar os três Cards para três destinos.
- Este arquivo já está criado na pasta `src/components`.
- Este componente deve renderizar três componentes `Card`, cada um deles com a informação das respectivas cidades (um componente `Card` para Rio de Janeiro, um para a Cidade do Cabo e outro para Acapulco) já contidas no arquivo `src/components/CardList.tsx`.

- Renderize esse componente no App.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Os cards de 'Rio de Janeiro', 'Cidade do Cabo' e 'Acapulco' são renderizados corretamente no componente `CardList`.

- O componente `CardList` está sendo renderizado no `App` corretamente.

</details>

---

# Exercício extra (esse não é testado pelo avaliador)

<details>
  <summary> Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um Card</summary><br />.

- Para adicionar uma classe de estilização a um elemento HTML, utilize o atributo className:

```js
<div className="card">...</div>
```
</details>
<br>
*Exercicíos criado pela [Trybe](https://www.betrybe.com/).
