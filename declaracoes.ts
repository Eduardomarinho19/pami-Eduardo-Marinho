// declarações de variaveis
let nome: string = 'joão';
let idade: number = 25;
let estaAtivo: boolean = true;

//arrays
let numeros: number[] = [1,2,3,4,5];
let nomes: string[]= ['Ana', 'Bruno','Carlos'];
let misto: (string | number)[] = ['Ana',25,'Carlos',30];
let misto2: Array<string | number> = ['Ana',25,'Carlos',30];

//tuplas
let pessoa: [string, number] = ['Maria',30];

//union types
let id: number | string =123;
id = 'ABC123';

//Interface - são usadas para definir estrutura de objetos
Interface Usuario{
    nome: string;
    idade: number;
    email: string; //opcional
}

//Utilizar elas fica assim:

let novo_usuario: Usuario ={
    nome: 'Amanda',
    idade: 18
};
