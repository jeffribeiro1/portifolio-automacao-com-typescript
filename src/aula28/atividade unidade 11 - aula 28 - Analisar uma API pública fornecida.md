# Análise do Contrato de Integração - Restful-booker API

 

Documentação do mapeamento dos contratos de integração da API **Restful-booker** (Gestão de Reservas de Hotel), cobrindo endpoints de leitura (`GET`) e criação (`POST`).

 

---

 

## 1. Endpoint de Leitura: Buscar Reserva por ID (`GET`)

 

### 1.1. Identificação e Finalidade

* **Endpoint/Rota:** `/booking/{id}` (Exemplo utilizado: `/booking/1`)

* **Objetivo de Negócio:** Recuperar os detalhes completos de uma reserva de hotel específica através do seu identificador único (`id`), exibindo informações de hóspede, datas e status de pagamento.

 

### 1.2. Estrutura do Request (O que o cliente envia)

* **Método HTTP:** `GET`

* **URL Completa:** `https://restful-booker.herokuapp.com/booking/1`

* **Headers (Cabeçalhos):** 

  * `Accept: application/json`

* **Body (Corpo):** N/A (Não se aplica a requisições GET)

 

### 1.3. Estrutura do Response (O que o servidor devolve)

* **Status Code Esperado:** `200 OK`

* **Payload de Retorno (Exemplo Real):**

 

```json

{

  "firstname": "Sally",

  "lastname": "Brown",

  "totalprice": 111,

  "depositpaid": true,

  "bookingdates": {

    "checkin": "2013-02-23",

    "checkout": "2014-10-23"

  },

  "additionalneeds": "Breakfast"

}

## 2. Endpoint de Criação: Criar Nova Reserva (POST)
2.1. Identificação e Finalidade
Endpoint/Rota: /booking

Objetivo de Negócio: Registrar uma nova reserva de hotel no sistema, persistindo os dados do hóspede, custo total, confirmação de depósito pago e o período de estadia.

2.2. Estrutura do Request (O que o cliente envia)
Método HTTP: POST

URL Completa: https://restful-booker.herokuapp.com/booking

Headers (Cabeçalhos):

Content-Type: application/json

Accept: application/json

Body (Corpo):

```json

{

  "firstname": "Carlos",

  "lastname": "Eduardo",

  "totalprice": 450,

  "depositpaid": true,

  "bookingdates": {

    "checkin": "2026-10-10",

    "checkout": "2026-10-15"

  },

  "additionalneeds": "Wi-Fi e Café da manhã"

}

```

2.3. Estrutura do Response (O que o servidor devolve)
Status Code Esperado: 200 OK

Payload de Retorno (Exemplo Real):

```json

{

  "bookingid": 3412,

  "booking": {

    "firstname": "Carlos",

    "lastname": "Eduardo",

    "totalprice": 450,

    "depositpaid": true,

    "bookingdates": {

      "checkin": "2026-10-10",

      "checkout": "2026-10-15"

    },

    "additionalneeds": "Wi-Fi e Café da manhã"

  }

}

```
