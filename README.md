# portifolio-automacao-com-typescript
Projeto desenvolvido para demonstrar conhecimentos em Quality Assurance (QA) e Automação de Testes, utilizando TypeScript como principal linguagem.



# Exercício TypeScript

Este exercício apresenta diferentes formas de utilizar **tipagem no TypeScript**, criação de **types personalizados**, utilização de **funções com tipos** e uma **condicional ternária**.

---

## 1. Formas de tipar

### Forma 1 — Declarando o tipo da variável

```typescript
let idade: number;
```

Nesse caso, a variável `idade` foi declarada explicitamente como sendo do tipo `number`.

---

### Forma 2 — Inferência de tipo

```typescript
const nome = 'Seu Ze';
```

O TypeScript identifica automaticamente que `nome` é uma `string`.

Essa é chamada de **inferência de tipo**, pois não é necessário informar `: string` manualmente.

---

### Forma 3 — Tipagem explícita

```typescript
const sobrenome: string = 'da Silva';
```

Aqui o tipo `string` foi informado explicitamente.

Apesar de funcionar, nesse caso é considerado **redundante**, porque o TypeScript já consegue identificar que `'da Silva'` é uma `string`.

---

# 2. Criando um Type personalizado

Podemos criar nossos próprios tipos utilizando a palavra-chave `type`.

```typescript
type usuario = {
    nick: string,
    age: number
}
```

O `type usuario` define que um usuário precisa possuir:

* `nick` → uma `string`
* `age` → um `number`

---

## 3. Utilizando o Type

```typescript
let jogador: usuario = {
    nick: 'Ricardo',
    age: 18
};

let jogadorVelho: usuario = {
    nick: 'Toinho',
    age: 76
};
```

As duas variáveis utilizam o tipo personalizado `usuario`.

---

# 4. Criando uma função com TypeScript

```typescript
function verificarIdade(usuarioAtual: usuario) {
    if (usuarioAtual.age >= 21) {
        console.log(
            `✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar 🕹️.`
        );
    } else {
        console.log(
            `Ei ${usuarioAtual.nick} é de menor e não pode jogar, pois tem apenas ${usuarioAtual.age} anos 👶`
        );
    }
}
```

A função `verificarIdade()` recebe um parâmetro chamado `usuarioAtual`.

O parâmetro precisa seguir o formato definido pelo `type usuario`.

A função verifica a idade do usuário:

* Se tiver **21 anos ou mais**, o acesso é liberado.
* Caso tenha menos de 21 anos, o acesso é negado.

---

## 5. Chamando a função

```typescript
verificarIdade(jogador);
verificarIdade(jogadorVelho);
```

A função é executada duas vezes, utilizando os dois objetos criados anteriormente.

---

# 6. Criando Types para um PC Gamer

Agora foi criado um exemplo relacionado a computadores.

```typescript
type PcGamer = {
    processador: string,
    idade: number
}

type PcGamerantigo = {
    processador: string,
    idade: number
}
```

Os dois tipos possuem os mesmos campos:

* `processador` → `string`
* `idade` → `number`

> **Observação:** como os dois tipos possuem exatamente a mesma estrutura, não seria necessário criar `PcGamerantigo`. Poderia ser utilizado apenas `PcGamer`.

---

## 7. Criando os objetos

```typescript
let meuPc: PcGamer = {
    processador: 'isete',
    idade: 2
};

let meupcVelho: PcGamerantigo = {
    processador: 'itrês',
    idade: 10
};
```

Aqui são criados dois computadores:

* `meuPc` → 2 anos de uso
* `meupcVelho` → 10 anos de uso

---

# 8. Condicional ternária

A função abaixo utiliza uma **condicional ternária**:

```typescript
function verificarCompatibilidade(pcAtual: PcGamer) {
    pcAtual.idade <= 2
        ? console.log(
            `O seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e vai rodar Gta 6 🕹️.`
        )
        : console.log(
            `Ei, o seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e não vai rodar Gta 6 😫`
        );
}
```

A estrutura básica da condicional ternária é:

```typescript
condição
    ? resultado_se_verdadeiro
    : resultado_se_falso;
```

Neste exercício:

```typescript
pcAtual.idade <= 2
```

é a condição.

Se for verdadeira:

```typescript
console.log('Vai rodar Gta 6');
```

Se for falsa:

```typescript
console.log('Não vai rodar Gta 6');
```

---

# 9. Chamando a função

```typescript
verificarCompatibilidade(meuPc);
verificarCompatibilidade(meupcVelho);
```

A função verifica os dois computadores.

### Resultado esperado

Para o computador de 2 anos:

```text
O seu pc com processador isete tem 2 anos e vai rodar Gta 6 🕹️.
```

Para o computador de 10 anos:

```text
Ei, o seu pc com processador itrês tem 10 anos e não vai rodar Gta 6 😫
```

---

# Código completo

```typescript
// Formas de tipar

// Forma 1
let idade: number;

// Forma 2 - Inferência de tipo
const nome = 'Seu Ze';

// Forma 3 - Tipagem explícita
// Não recomendada neste caso por ser redundante
const sobrenome: string = 'da Silva';

// Tipagem especial
type usuario = {
    nick: string,
    age: number
};

// Chamando o type
let jogador: usuario = {
    nick: 'Ricardo',
    age: 18
};

let jogadorVelho: usuario = {
    nick: 'Toinho',
    age: 76
};

function verificarIdade(usuarioAtual: usuario) {
    if (usuarioAtual.age >= 21) {
        console.log(
            `✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar 🕹️.`
        );
    } else {
        console.log(
            `Ei ${usuarioAtual.nick} é de menor e não pode jogar, pois tem apenas ${usuarioAtual.age} anos 👶`
        );
    }
}

verificarIdade(jogador);
verificarIdade(jogadorVelho);

// Produto

type PcGamer = {
    processador: string,
    idade: number
};

type PcGamerantigo = {
    processador: string,
    idade: number
};

let meuPc: PcGamer = {
    processador: 'isete',
    idade: 2
};

let meupcVelho: PcGamerantigo = {
    processador: 'itrês',
    idade: 10
};

function verificarCompatibilidade(pcAtual: PcGamer) {
    pcAtual.idade <= 2
        ? console.log(
            `O seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e vai rodar Gta 6 🕹️.`
        )
        : console.log(
            `Ei, o seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e não vai rodar Gta 6 😫`
        );
}

verificarCompatibilidade(meuPc);
verificarCompatibilidade(meupcVelho);
```

## Conceitos utilizados

| Conceito               | Exemplo                 |
| ---------------------- | ----------------------- |
| Tipagem explícita      | `let idade: number`     |
| Inferência de tipo     | `const nome = 'Seu Ze'` |
| `type` personalizado   | `type usuario = {...}`  |
| Tipagem de objetos     | `let jogador: usuario`  |
| Função tipada          | `usuarioAtual: usuario` |
| Condicional `if/else`  | Verificação da idade    |
| Operador de comparação | `>=` e `<=`             |
| Condicional ternária   | `condição ? ... : ...`  |
| Template string        | `` `Olá ${nome}` ``     |
| `console.log()`        | Exibição dos resultados |

