//atvd1

let TimesDeFutebol = ["Sport","Bahia","Palmeiras", "Vasco"];

console.log ("primeiro time:", TimesDeFutebol[0]);

console.log("ultimo time:", TimesDeFutebol[TimesDeFutebol.length - 1]);
  
//atvd2
let minhaListaDeTarefas = [];

minhaListaDeTarefas.push("ir para a escola");
minhaListaDeTarefas.push("jogar o lixo");
minhaListaDeTarefas.push("academia");
minhaListaDeTarefas.push("futebol");

console.log("Lista de tarefas:", minhaListaDeTarefas)

//atvd3
let animais = ["elefante", "cachorro", "leão", "tigre"];

for (let i = 0; i < animais.length; i++) {
  console.log(`O animal na posição ${i} é ${animais[i]}`);
}

//atvd4
let numeros = [7, 5, 15, 22, 11, 4];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

//atvd5
const frutas = ["uva", "morango", "pera"];

let i = 0;
while (i < frutas.length) {
  console.log(frutas[i]);
  i++;
}

console.log("acabou");

//atvd6
for (let numero = 2; numero <= 9; numero++) {
  let linha = "";

  for (let i = 1; i <= 10; i++) {
    linha += `${numero} x ${i} = ${numero * i}  `;
  }

  console.log(linha);
}
