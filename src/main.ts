// Calculadora com typescript

let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLDivElement;

let selectCalculo = document.getElementById('selectCalculo') as HTMLSelectElement;

const calculadora = (n1:number, n2:number) => {
    console.log("Calculo selecionado", selectCalculo.value);
    switch(selectCalculo.value) {
        case 'multiplicacao':
            return n1 * n2;
            break;
        case 'divisao':
            return n1 / n2;
            break;
        case 'adicao':
            return n1 + n2;
            break
        case 'subtracao':
            return n1 - n2;
            break;
    }
    

}

botao.addEventListener('click', () => {
    res.innerHTML = calculadora(+numero1.value, +numero2.value).toString(); 

}
)

// --Array no type script

// let exemploArray:number[] = [90, 10, 100, 1000];
// let exemploArray:any = ["random", 10, 100, "curtindo"];

//  --Função anonima com typescript

// let nomes = ['João', 'Roger', 'Leans', 'Robert', 90];
// nomes.forEach(function(nome){
//     if(typeof nome === 'string') {   
//         console.log(nome.toUpperCase())
//     } else {
//         console.log(nome)

//     }
    
// })

// --Typescript em objetos e fazendo tipagem opcional

// function resumo(usuario: {nome:string, idade?:number}) {
//     if(usuario.idade != undefined) {
//         return `Olá, ${usuario.nome}! Sua idade é ${usuario.idade}.`
//     } else {
//         return `Olá, ${usuario.nome}!`
//     }
// }

// let u = {
//     nome: "Roberto",
//     idade: 90
// };

// console.log(resumo(u));

// --Multiplos types

let idade:string | number = 90;

const funcao = (idade:number) => {
    
}





