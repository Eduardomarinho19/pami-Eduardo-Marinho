// função que retorna tipos 
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//interface para objetos Usuario
interface Usuario{
    nome: string;
    idade: number;
    email: string; //opcional
}

//utilizando a interface usuário fica assim:
function exibirUsuario(usuario:Usuario): void{
    console.log('Nome: ${usuario.nome}');
    console.log('Idade: ${usuario.idade}');
}

exibirUsuario({ nome: 'Marcos', idade: 22 });

//Exemplo de uma função que retorna arrays e tem paametros opcionais
function listaNomes (nomes: string[]): void{
    nomes.forEach(nome => console.log(nome));
}

listaNomes(['Ana','Bruno','Carlos']);
