import * as rls from "readline-sync";

let arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMayor: number = arreglo[0]; 

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > numeroMayor) {
    numeroMayor = arreglo[i];
  }
}

console.log(`El número más grande es: ${numeroMayor}`);

function parImpar(num: number): number {
  if (num % 2 === 0) {
    console.log(`El número ${num} es par`);
  } else {
    console.log(`El número ${num} es impar`);
  }
  return num;
}

parImpar(numeroMayor);