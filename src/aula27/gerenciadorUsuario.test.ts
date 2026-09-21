import {
  bancoDeDados,
  buscarUsuarioNoBanco,
  obterPerfilUsuarioProcessado,
  PerfilProcessado,
  Usuario
} from "./gerenciadorUsuarios";

describe("Testes Unitários em TypeScript - Gerenciador de Usuários", () => {
  // --------------------------------------------------------------------------
  // 1. Testando Tipagem e Estruturas de Dados
  // --------------------------------------------------------------------------
  describe("Estrutura de Dados (Arrays e Objetos)", () => {
    test("Deve validar o tamanho e os tipos dos elementos do Array", () => {
      expect(Array.isArray(bancoDeDados)).toBe(true);
      expect(bancoDeDados).toHaveLength(3);
    });

    test("Deve contê-los no formato da interface Usuario", () => {
      const primeiroUsuario: Usuario = bancoDeDados[0];
      expect(primeiroUsuario).toEqual({
        id: 1,
        nome: "Ana Silva",
        email: "ana@email.com",
        ativo: true
      });
    });
  });

  // --------------------------------------------------------------------------
  // 2. Testando a Simulação da Promise Tipada
  // --------------------------------------------------------------------------
  describe("Simulação de Promise", () => {
    test("Deve resolver retornando o objeto Usuario quando o ID for encontrado", () => {
      return buscarUsuarioNoBanco(1).then((usuario: Usuario) => {
        expect(usuario.id).toBe(1);
        expect(usuario.nome).toBe("Ana Silva");
      });
    });

    test("Deve rejeitar com erro tipado quando o ID não existir", () => {
      return expect(buscarUsuarioNoBanco(99)).rejects.toThrow(
        "Usuário com ID 99 não foi encontrado."
      );
    });
  });

  // --------------------------------------------------------------------------
  // 3. Testando a Função Assíncrona (Async/Await)
  // --------------------------------------------------------------------------
  describe("Função Assíncrona com Async/Await", () => {
    test("Deve retornar um PerfilProcessado válido para um usuário ativo", async () => {
      const perfil: PerfilProcessado = await obterPerfilUsuarioProcessado(1);
      expect(perfil).toEqual({
        id: 1,
        nomeUpper: "ANA SILVA",
        contato: "ana@email.com",
        status: "Conta Ativa"
      });
    });

    test("Deve processar corretamente o perfil de um usuário inativo", async () => {
      const perfil: PerfilProcessado = await obterPerfilUsuarioProcessado(2);
      expect(perfil.status).toBe("Conta Inativa");
    });

    test("Deve lançar erro ao passar um ID inexistente usando async/await", async () => {
      await expect(obterPerfilUsuarioProcessado(404)).rejects.toThrow(
        "Usuário com ID 404 não foi encontrado."
      );
    });
  });
});
