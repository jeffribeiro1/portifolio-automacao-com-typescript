# portifolio-automacao-com-typescript
Projeto desenvolvido para demonstrar conhecimentos em Quality Assurance (QA) e Automação de Testes, utilizando TypeScript como principal linguagem.

---

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

---

# Exercício TypeScript — Simulação de Login e Async/Await

Neste exercício foi criada uma **simulação de um cenário de teste de login**, utilizando TypeScript.

O código simula:

1. Abertura da tela de login.
2. Espera para simular o carregamento da página.
3. Inserção das credenciais.
4. Comunicação com uma API de login simulada.
5. Validação das credenciais.
6. Retorno de um token quando o login é válido.
7. Tratamento de erro quando o login é inválido.
8. Execução de uma etapa final de limpeza.

---

# 1. Importação da função `aguardar`

```typescript
import { aguardar } from "../../utils/helpers";
```

Foi importada uma função chamada `aguardar` de um arquivo de funções auxiliares (`helpers`).

Essa função é utilizada para **simular uma espera**, como aconteceria em um teste automatizado quando precisamos aguardar o carregamento de uma página, elemento ou resposta de uma API.

Exemplo:

```typescript
await aguardar(2000);
```

Nesse caso, o código aguarda aproximadamente **2 segundos** antes de continuar.

---

# 2. Simulação de uma API de Login

Foi criada a função:

```typescript
function simularLogin(
    usuario: string,
    senha: string
): Promise<string> {
```

Essa função recebe dois parâmetros:

* `usuario` → deve ser uma `string`
* `senha` → deve ser uma `string`

A função retorna:

```typescript
Promise<string>
```

Isso significa que o resultado da função será disponibilizado de forma **assíncrona** e, quando concluído, retornará uma `string`.

---

# 3. Utilização de `Promise`

Dentro da função foi criada uma `Promise`:

```typescript
return new Promise((resolve, reject) => {
```

Uma `Promise` representa uma operação que pode:

* ser concluída com sucesso → `resolve`
* apresentar uma falha → `reject`

---

## `resolve`

Quando as credenciais estão corretas:

```typescript
if (usuario === 'admin' && senha === '123456') {
    resolve('token-secreto-aprovado-123');
}
```

O código verifica se:

```text
usuário = admin
senha = 123456
```

Se as duas condições forem verdadeiras, a Promise é resolvida e retorna um token:

```text
token-secreto-aprovado-123
```

Esse comportamento simula uma API retornando um **token de autenticação** após um login bem-sucedido.

---

## `reject`

Caso as credenciais estejam incorretas:

```typescript
else {
    reject('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');
}
```

A Promise é rejeitada e retorna uma mensagem simulando um erro HTTP:

```text
ERRO 401 - USUARIO OU SENHA INVÁLIDOS!
```

O código `401` é normalmente associado a uma tentativa de acesso sem autenticação válida.

---

# 4. Função principal com `async/await`

Foi criada a função:

```typescript
async function executarCT() {
```

A palavra-chave `async` indica que a função possui operações assíncronas e permite utilizar `await` dentro dela.

O nome `executarCT` pode ser interpretado como **executar caso de teste**.

---

# 5. Início do cenário de teste

```typescript
console.log('⏳ INICIANDO CENÁRIO DE TESTE ;D');
```

Esse comando informa no console que a execução do cenário de teste foi iniciada.

---

# 6. Simulação da abertura da tela de login

```typescript
console.log('Passo 1: abrindo tela de login ...');
await aguardar(2000);
```

Primeiro é exibida uma mensagem indicando a abertura da tela de login.

Depois:

```typescript
await aguardar(2000);
```

O teste aguarda aproximadamente 2 segundos.

Isso simula o tempo necessário para uma aplicação carregar uma tela.

---

# 7. Simulação da inserção das credenciais

```typescript
console.log('Passo 2: Inserindo credenciais ...');
await aguardar(3000);
```

O código registra que as credenciais estão sendo inseridas e aguarda aproximadamente 3 segundos.

Em uma automação real, essa etapa poderia representar ações como:

```text
Localizar campo de usuário
↓
Preencher usuário
↓
Localizar campo de senha
↓
Preencher senha
↓
Clicar em Login
```

---

# 8. Execução do login

O código executa:

```typescript
const token = await simularLogin('adm', '12345');
```

Aqui existe um ponto importante do exercício.

A função `simularLogin()` espera:

```text
admin
123456
```

Porém, foram informados:

```text
adm
12345
```

Portanto, as credenciais são **inválidas**.

Consequentemente, a Promise executará:

```typescript
reject('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');
```

---

# 9. Tratamento de exceções com `try/catch`

A execução do login está dentro de:

```typescript
try {
    ...
} catch (erro) {
    console.error(`Falha no teste: ${erro}`);
}
```

O `try` contém o código que pode apresentar uma exceção.

Caso ocorra um erro, o `catch` captura esse erro.

Neste exercício, o resultado esperado será semelhante a:

```text
Falha no teste: ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌
```

Isso evita que o programa simplesmente seja interrompido sem informar o que aconteceu.

---

# 10. Bloco `finally`

Depois do `catch`, existe:

```typescript
finally {
    console.log('Passo final: Fechando navegador e limpando dados');
}
```

O bloco `finally` é executado **independentemente de o teste ter sucesso ou falha**.

Em automação de testes, esse conceito é bastante útil para ações de limpeza, como:

* fechar navegador;
* encerrar sessão;
* limpar dados;
* remover arquivos temporários;
* finalizar o cenário de teste.

---

# 11. Executando o caso de teste

No final do código:

```typescript
executarCT();
```

A função `executarCT()` é chamada e todo o cenário de teste começa a ser executado.

---

# Fluxo do teste

O fluxo criado no exercício pode ser representado assim:

```text
Início
  ↓
Iniciar cenário de teste
  ↓
Abrir tela de login
  ↓
Aguardar 2 segundos
  ↓
Inserir credenciais
  ↓
Aguardar 3 segundos
  ↓
Enviar usuário e senha para a API simulada
  ↓
Credenciais válidas?
  ├── SIM → Retorna token → Login realizado
  │
  └── NÃO → Erro 401 → Captura pelo catch
                    ↓
             Executa o finally
                    ↓
                   Fim
```

---

# Resultado deste exercício

Como foram utilizadas as credenciais:

```typescript
simularLogin('adm', '12345');
```

e a função espera:

```text
Usuário: admin
Senha: 123456
```

o teste **não será aprovado**.

O resultado esperado no console será aproximadamente:

```text
⏳ INICIANDO CENÁRIO DE TESTE ;D
Passo 1: abrindo tela de login ...
Passo 2: Inserindo credenciais ...
Falha no teste: ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌
Passo final: Fechando navegador e limpando dados
```

---

# Conceitos utilizados

| Conceito          | Utilização                                         |
| ----------------- | -------------------------------------------------- |
| TypeScript        | Linguagem utilizada no exercício                   |
| Tipagem           | `usuario: string`, `senha: string`                 |
| `Promise`         | Simulação de uma operação assíncrona               |
| `resolve`         | Representa o sucesso do login                      |
| `reject`          | Representa a falha do login                        |
| `async`           | Permite trabalhar com operações assíncronas        |
| `await`           | Aguarda a conclusão de uma operação                |
| `try`             | Executa código que pode apresentar erro            |
| `catch`           | Captura e trata o erro                             |
| `finally`         | Executa uma ação independentemente do resultado    |
| `console.log()`   | Exibe informações no console                       |
| `console.error()` | Exibe mensagens de erro                            |
| Função            | Organização e reutilização do código               |
| Simulação de API  | Representa uma comunicação com um serviço de login |
| Token             | Simula uma resposta de autenticação                |

---

# Aplicação em QA e Automação

Esse exercício é relacionado à **automação de testes**, pois simula um fluxo semelhante ao que pode ser encontrado em uma aplicação real.

Em uma automação utilizando ferramentas como Playwright ou Cypress, o fluxo poderia ser:

```text
Abrir aplicação
      ↓
Acessar tela de login
      ↓
Preencher usuário
      ↓
Preencher senha
      ↓
Clicar em entrar
      ↓
Validar resultado
      ↓
Sucesso ou erro
      ↓
Finalizar teste
```

O exercício também demonstra uma ideia importante para QA: **validar tanto cenários de sucesso quanto cenários de falha**.

Neste caso, foram utilizadas credenciais inválidas de propósito para testar o comportamento de erro da aplicação simulada.

---

# Código completo

```typescript
// Importando nossa função utilitária de aguardar tempo (delay)
import { aguardar } from "../../utils/helpers";

// Simulando API de Login
function simularLogin(
    usuario: string,
    senha: string
): Promise<string> {

    return new Promise((resolve, reject) => {

        if (usuario === 'admin' && senha === '123456') {
            resolve('token-secreto-aprovado-123');
        } else {
            reject('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');
        }
    });
}

// Função principal testando com Async/Await
async function executarCT() {

    console.log('⏳ INICIANDO CENÁRIO DE TESTE ;D');

    try {

        console.log('Passo 1: abrindo tela de login ...');
        await aguardar(2000);

        console.log('Passo 2: Inserindo credenciais ...');
        await aguardar(3000);

        const token = await simularLogin('adm', '12345');

        console.log(
            `Sucesso! Usuário Logado! Token recebido: ${token}\n`
        );

    } catch (erro) {

        console.error(`Falha no teste: ${erro}`);

    } finally {

        console.log(
            'Passo final: Fechando navegador e limpando dados'
        );
    }
}

executarCT();
```

## Resumo

Neste exercício foi desenvolvido um **cenário de teste de login simulado em TypeScript**, utilizando `Promise`, `async/await`, `try/catch/finally` e tipagem de parâmetros.

O objetivo principal foi praticar **programação assíncrona e tratamento de erros**, simulando um fluxo que poderia fazer parte de uma automação de testes de software.


