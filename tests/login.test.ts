//importando dependencias
import { test, expect, vi } from 'vitest';

//simulando login lento
function loginLento(usuario: string, senha: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Bem Vindo, ${usuario}!`);
    }, 5000);
  });
}

test('Simular login usando fake timers', async () => {
  //ligando a Máquina do tempo
  vi.useFakeTimers();

  console.log('⏳INICIANDO CENÁRIO DE TESTE ;D');

  // chamando promisse de usuario sem await
  const promessaLogin = loginLento('Ademiro', 'senha123');

  //configura avanço de 5 segundos
  vi.advanceTimersByTime(5000);

  const resultado = await promessaLogin;

  //verificar resultado
  expect(resultado).toBe('Bem Vindo, Ademiro!');

  console.log('Sucesso! Teste finalizado na velocidade da luz⚡');

  //Desligando a máquina do tempo
  vi.useRealTimers();
});
