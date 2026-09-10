//Importando nossa função utilitária de aguardar tempo(delay)
import { aguardar } from "../../utils/helpers";
//Simulando API de Login
function simularLogin (usuario:string, senha:string):Promise<string>{
    return new Promise((resolve,reject)=> { 
        if (usuario === 'admin' && senha === '123456'){
            resolve ('token-secreto-aprovado-123');
        }else{
            reject ('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');
        }
    });
}
//Função principal testando com Assync/Await ;-D
async function executarCT() {    
    console.log('⏳ INICIANDO CENÁRIO DE TESTE ;D');
    try{
        console.log('Passo 1: abrindo tela de login ...');
        await aguardar(2000);
        console.log('Passo 2: Inserindo credenciais ...');
        await aguardar (3000);
        
        const token = await simularLogin('adm','12345');
        console.log (`Sucesso! Usuário Logado! Token recebido: ${token}\n`);
    }catch (erro){
        console.error(`Falha no teste: ${erro}`);
   }finally{
        console.log('Passo final: Fechando navegador e limpando dados');
   } 
}
executarCT();