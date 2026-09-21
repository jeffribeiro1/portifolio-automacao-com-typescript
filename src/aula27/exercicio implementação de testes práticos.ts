Implementar exemplos práticos contendo:
Uso de arrays e objetos
Uma função assíncrona com async/await
Simulação de uma Promise
Explicar, em comentários, o fluxo assíncrono
Criação de Testes Unitários*/

```TypeScript
// ============================================================================
// TYPINGS (Interfaces para Objetos)
// ============================================================================

/** Interface para o objeto original do usuário */
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
}

/** Interface para o objeto de perfil retornado após o processamento */
export interface PerfilProcessado {
  id: number;
  nomeUpper: string;
  contato: string;
  status: "Conta Ativa" | "Conta Inativa";
}

// ============================================================================
// BASE DE DADOS (Array de Objetos tipado)
// ============================================================================
export const bancoDeDados: Usuario[] = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Bruno Costa", email: "bruno@email.com", ativo: false },
  { id: 3, nome: "Carla Souza", email: "carla@email.com", ativo: true }
];

// ============================================================================
// SIMULAÇÃO DE UMA PROMISE TIPADA
// ============================================================================
/**
 * Simula uma busca assíncrona no banco de dados.
 * @param id ID do usuário a ser buscado.
 * @returns Retorna uma Promise que resolve com o tipo 'Usuario'.
 */
export function buscarUsuarioNoBanco(id: number): Promise<Usuario> {
  // FLUXO ASSÍNCRONO - PASSO 1:
  // Criamos uma nova Promise. Em TypeScript, passamos o tipo genérico <Usuario>
  // para garantir que a resolução do valor seja fortemente tipada.
  return new Promise<Usuario>((resolve, reject) => {

    // FLUXO ASSÍNCRONO - PASSO 2:
    // O setTimeout registra a callback na Web API / Node C++ API e libera a callstack.
    setTimeout(() => {
      // Método de Array (.find) procurando no Array de Objetos
      const usuario = bancoDeDados.find((u) => u.id === id);

      // FLUXO ASSÍNCRONO - PASSO 3:
      // O timer finaliza, o callback entra na Event Queue e é executado pelo Event Loop:
      if (usuario) {
        // Resolve a Promise (Estado: Fulfilled) passando o objeto tipado
        resolve(usuario);
      } else {
        // Rejeita a Promise (Estado: Rejected) com uma instância de Error
        reject(new Error(`Usuário com ID ${id} não foi encontrado.`));
      }
    }, 500);
  });
}

// ============================================================================
// FUNÇÃO ASSÍNCRONA COM ASYNC / AWAIT
// ============================================================================
/**
 * Busca e formata o perfil do usuário.
 * @param id ID do usuário.
 * @returns Promise com o tipo 'PerfilProcessado'.
 */
export async function obterPerfilUsuarioProcessado(id: number): Promise<PerfilProcessado> {
  try {
    // FLUXO ASSÍNCRONO - PASSO 4:
    // O 'await' suspende o contexto de execução desta função até a Promise ser resolvida.
    // O TypeScript infere automaticamente que 'usuario' é do tipo 'Usuario'.
    const usuario = await buscarUsuarioNoBanco(id);

    // Manipulação de Objeto e validação com o tipo 'PerfilProcessado'
    const perfilFormatado: PerfilProcessado = {
      id: usuario.id,
      nomeUpper: usuario.nome.toUpperCase(),
      contato: usuario.email,
      status: usuario.ativo ? "Conta Ativa" : "Conta Inativa"
    };

    return perfilFormatado;
  } catch (erro) {
    // Captura a rejeição da Promise e retransmite o erro
    throw erro;
  }
}```
