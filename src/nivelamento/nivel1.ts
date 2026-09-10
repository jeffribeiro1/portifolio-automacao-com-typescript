// formas de tipar
// forma 1
let idade:number;
// forma 2
const nome = 'Seu Ze';
// forma 3 não recomendado por ser reduntante
const sobrenome:string = 'da Silva';
// tipagens especiais
type usuario = {'nick':string, 'age':number}
// Chamando type novo
let jogador:usuario = {nick: 'Ricardo', age:18};
let jogadorVelho:usuario = {nick: 'Toinho', age: 76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>= 21) {
        console.log(`✅Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar 🕹️.`);
    }else { console.log (`Ei ${usuarioAtual.nick} é de menor e não pode jogar, pois tem apenas ${usuarioAtual.age} anos 👶`);
    }
};
verificarIdade(jogador);
verificarIdade(jogadorVelho);

// produto


type PcGamer = {'processador': string, 'idade': number}
type PcGamerantigo = {'processador': string, 'idade': number}
let meuPc: PcGamer = {processador: 'isete', idade: 2};
let meupcVelho: PcGamerantigo = {processador: 'itrês', idade: 10};

function verificarCompatibilidade (pcAtual: PcGamer){
    pcAtual.idade <= 2
        ? console.log(`O seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e vai rodar Gta 6 🕹️.`)
        : console.log(`Ei, o seu pc com processador ${pcAtual.processador} tem ${pcAtual.idade} anos e não vai rodar Gta 6😫`);
}
verificarCompatibilidade(meuPc);
verificarCompatibilidade(meupcVelho);

//








