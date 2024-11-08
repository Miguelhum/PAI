// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.

// let arr = [];
// arr[0] = "Hola";
// arr[1] = "Adeu";

// console.log(arr);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.

// let arr = [];
// arr[0] = "Hola";
// arr[1] = ",";
// arr[2] = "Nom";

// console.log(arr);

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5? está vacía.

// let arr = [23,45,98,73];

// let suma = arr[0] + arr[2];

// console.log(suma)

// arr[5] = suma;

// console.log(arr);

//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
  //  prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
    //taula a la consola.

//let num = prompt("escribe un número");
//let arr = [];
//arr[0] = num * 2;
//arr[1] = num * 3;

//console.log(arr);

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
//emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
//multiplicació i la divisió dels dos valors introduïts.

//let num1 = parseInt(prompt("escribe un número"));
//let num2 = parseInt(prompt("escribe un número"));
//let arr = [];
//arr[0] = num1 + num2;
//arr[1] = num1 - num2;
//arr[2] = num1 * num2;
//arr[3] = num1 / num2;

//console.log(arr);

//21.6.- Donada aquesta taula:
//let arr = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
//de la taula.
//console.log(arr[0], arr[15])
//*****
//Donada la definició d’aquesta taula:
let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];

//for (let i = 0; i < taula.length; i++) {
    //console.log(taula[i]);
//}

//21.8.- Fes un programa que escrigui a la consola la suma tots els valors
//emmagatzemats a la taula.
//let suma = 0;

//for (let i = 0; i < taula.length; i++) {
    //suma += taula[i];
//}

//console.log("La suma de tots els valors és:", suma);

//21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
//valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
//emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
let taulaNova = [];
for (let i = 0; i < taula.length; i++){
    taulaNova[i] = taula[i] + 25;
}
// taulaNova[0]=taula[0] + 25; Equivalente de uno en uno en vez de recorrido


console.log(taulaNova);