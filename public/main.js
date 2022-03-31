// Calculadora com typescript
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
var selectCalculo = document.getElementById('selectCalculo');
var calculadora = function (n1, n2) {
    console.log("Calculo selecionado", selectCalculo.value);
    switch (selectCalculo.value) {
        case 'multiplicacao':
            return n1 * n2;
            break;
        case 'divisao':
            return n1 / n2;
            break;
        case 'adicao':
            return n1 + n2;
            break;
        case 'subtracao':
            return n1 - n2;
            break;
    }
};
botao.addEventListener('click', function () {
    res.innerHTML = calculadora(+numero1.value, +numero2.value).toString();
});
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
// --Typescript em objetos
function resumo(usuario) {
    return "Ol\u00E1, ".concat(usuario.nome, "! Sua idade \u00E9 ").concat(usuario.idade, ".");
}
var u = {
    nome: "Roberto",
    idade: 90
};
console.log(resumo(u));
