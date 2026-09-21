# Documento Técnico: Fundamentos de APIs RESTful e Testes de Integração

 

Este documento aborda os conceitos essenciais da arquitetura REST, detalhando métodos HTTP, códigos de status, estruturação de payloads JSON e a implementação de testes de integração com TypeScript e Jest.

 

---

 

## 1. Diferença entre os Métodos HTTP: PUT, PATCH e DELETE

 

Na arquitetura REST, a manipulação de recursos existentes e sua remoção utilizam métodos específicos para indicar a intenção da operação:

 

* **`PUT` (Substituição Total):**

  * **Finalidade:** Atualiza um recurso por completo.

  * **Comportamento:** O cliente envia a representação completa da entidade. Se algum campo for omitido no payload, o servidor pode sobrescrevê-lo com `null` ou remover o valor existente.

  * **Idempotência:** Sim. Múltiplas requisições idênticas resultam no mesmo estado final do recurso.

 

* **`PATCH` (Atualização Parcial):**

  * **Finalidade:** Modifica apenas campos específicos de um recurso existente.

  * **Comportamento:** O cliente envia somente as chaves que deseja alterar. Os demais atributos do recurso permanecem inalterados.

  * **Idempotência:** Geralmente sim, embora não obrigatoriamente (a depender da lógica de negócio implementada).

 

* **`DELETE` (Remoção):**

  * **Finalidade:** Remove um recurso específico identificado na URI.

  * **Comportamento:** O servidor exclui o registro correspondente. Requisições subsequentes ao mesmo recurso costumam retornar `404 Not Found`.

  * **Idempotência:** Sim. Excluir um recurso uma vez ou cem vezes resulta na ausência desse recurso no sistema.

 

---

 

## 2. Principais Status Codes e seus Significados

 

Os códigos de status informam ao cliente o resultado do processamento da requisição:

 

| Código | Nome | Categoria | Descrição / Uso |

| :--- | :--- | :--- | :--- |

| **`200`** | OK | Sucesso | Requisição processada com sucesso. Comum em `GET`, `PUT` e `PATCH`. |

| **`201`** | Created | Sucesso | Recurso criado com sucesso. Retornado tipicamente após um `POST`. |

| **`204`** | No Content | Sucesso | Operação concluída com sucesso, mas sem corpo na resposta (comum em `DELETE`). |

| **`400`** | Bad Request | Erro do Cliente | Sintaxe inválida, erro de validação ou payload malformado. |

| **`401`** | Unauthorized | Erro do Cliente | Falta de autenticação (token ausente ou inválido). |

| **`403`** | Forbidden | Erro do Cliente | Cliente autenticado, mas sem permissão de acesso ao recurso. |

| **`404`** | Not Found | Erro do Cliente | O recurso solicitado não existe na URL fornecida. |

| **`500`** | Internal Server Error | Erro do Servidor | Erro inesperado do lado do servidor ao processar a requisição. |

 

---

 

## 3. Exemplo de Payload JSON Bem Estruturado

 

Exemplo de payload do tipo `POST` para criação de um usuário com objetos aninhados, arrays e tipos primitivos variados:

 

```json

{

  "nome": "Mariana Oliveira",

  "email": "mariana.oliveira@email.com",

  "idade": 28,

  "ativo": true,

  "telefones": [

    {

      "tipo": "celular",

      "numero": "+55 81 99999-8888"

    }

  ],

  "endereco": {

    "rua": "Avenida Boa Viagem",

    "numero": "1500",

    "bairro": "Boa Viagem",

    "cidade": "Recife",

    "uf": "PE",

    "cep": "51111-000"

  },

  "interesses": ["tecnologia", "automação", "typescript"]

}

```

## 4. Criação de Testes de Integração em TypeScript
Exemplo de suíte de testes de integração utilizando Jest e Supertest para validar o contrato e as regras de negócio de um recurso de usuários.

4.1. Código dos Testes (usuarios.integration.test.ts)
```typescript

import request from "supertest";

 

// URL base da API simulada ou em ambiente de testes

const API_URL = "https://reqres.in/api](https://reqres.in/api";

 

interface UsuarioRequest {

  name: string;

  job: string;

}

 

interface UsuarioResponse extends UsuarioRequest {

  id: string;

  createdAt: string;

}

 

describe("Testes de Integração - API de Usuários", () => {

  

  // --------------------------------------------------------------------------

  // 1. Teste de Leitura (GET)

  // --------------------------------------------------------------------------

  describe("GET /users", () => {

    test("Deve retornar lista de usuários com status 200", async () => {

      const response = await request(API_URL)

        .get("/users?page=1")

        .set("Accept", "application/json");

 

      expect(response.status).toBe(200);

      expect(response.body).toHaveProperty("page", 1);

      expect(Array.isArray(response.body.data)).toBe(true);

      expect(response.body.data.length).toBeGreaterThan(0);

    });

 

    test("Deve retornar status 404 ao buscar usuário inexistente", async () => {

      const response = await request(API_URL)

        .get("/users/999999")

        .set("Accept", "application/json");

 

      expect(response.status).toBe(404);

    });

  });

 

  // --------------------------------------------------------------------------

  // 2. Teste de Criação (POST)

  // --------------------------------------------------------------------------

  describe("POST /users", () => {

    test("Deve criar um novo usuário e retornar status 201 com o payload válido", async () => {

      const novoUsuario: UsuarioRequest = {

        name: "Clara Mendes",

        job: "Engenheira de QA"

      };

 

      const response = await request(API_URL)

        .post("/users")

        .send(novoUsuario)

        .set("Content-Type", "application/json")

        .set("Accept", "application/json");

 

      const body: UsuarioResponse = response.body;

 

      expect(response.status).toBe(201);

      expect(body).toHaveProperty("id");

      expect(body).toHaveProperty("createdAt");

      expect(body.name).toBe(novoUsuario.name);

      expect(body.job).toBe(novoUsuario.job);

    });

  });

 

  // --------------------------------------------------------------------------

  // 3. Teste de Atualização Parcial (PATCH)

  // --------------------------------------------------------------------------

  describe("PATCH /users/:id", () => {

    test("Deve atualizar parcialmente o registro do usuário com status 200", async () => {

      const dadosAtualizados = {

        job: "Líder de Automação"

      };

 

      const response = await request(API_URL)

        .patch("/users/2")

        .send(dadosAtualizados)

        .set("Content-Type", "application/json");

 

      expect(response.status).toBe(200);

      expect(response.body.job).toBe(dadosAtualizados.job);

      expect(response.body).toHaveProperty("updatedAt");

    });

  });

 

  // --------------------------------------------------------------------------

  // 4. Teste de Exclusão (DELETE)

  // --------------------------------------------------------------------------

  describe("DELETE /users/:id", () => {

    test("Deve remover um usuário existente e retornar status 204", async () => {

      const response = await request(API_URL)

        .delete("/users/2");

 

      expect(response.status).toBe(204);

      expect(response.body).toEqual({});

    });

  });

});

```
