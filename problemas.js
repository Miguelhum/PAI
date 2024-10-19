//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el 
//número llegit és negatiu” si el número és més petit que zero.

//let número = prompt("escribe un número")

 //if (número<0)
    //console.log("número negativo")

//13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
//número llegit és parell” si el número es parell.

//let numero = prompt("escribe un número")
 
 //if(numero % 2 == 0)
   // console.log("número par")

 //13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
//és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
//per cada cas.

//let número = prompt("escribe un número")
 //if(número % 2 == 0)
   // console.log("número par")
//if(número % 2 != 0)
    //console.log("número impar")

//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
//el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
//gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

//let numero1 = prompt("escribe un número")
//let numero2 = prompt("escribe un número")

//if(numero1 > numero2)
  //  console.log(numero1)
//if(numero2 > numero1)
    //console.log(numero2)

//13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
//el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
//números és el més gran. 

//let numero1 = prompt("escribe un número")
//let numero2 = prompt("escribe un número")
//let numero3 = prompt("escribe un numero")

//if(numero1 > numero2 && numero1 > numero3)
  //  console.log("numero mas grande" + numero1)
//if(numero2 > numero1 && numero2 > numero3)
  //  console.log("numero mas grande" + numero2)
//if(numero3 > numero1 && numero3 > numero2)
  //  console.log("numero mas grande" + numero3)

//13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
//entre 1 i 12, escrigui per pantalla el nom del mes que correspon.

//let mes = prompt("introduce un número del 1-12")

//if(mes == 1)
  //  console.log = ("enero");
//if(mes == 2)
  //  console.log = ("febrero");
//if(mes == 3)
  //  console.log = ("marzo");
//if(mes == 4)
  //  console.log = ("abril");
//if(mes == 5)
  //  console.log = ("mayo");
//if(mes == 6)
  //  console.log = ("junio");
//if(mes == 7)
  //  console.log = ("julio");
//if(mes == 8)
  //  console.log = ("agosto");
//if(mes == 9)
  //  console.log = ("septiembre");
//if(mes == 10)
  //  console.log = ("octubre");
//if(mes == 11)
  //  console.log = ("noviembre");
//if(mes == 12)
  //  console.log = ("diciembre");

//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
//número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
//número llegit és positiu” en cas contrari. 

//let num = prompt("escribe un número")

//if(num >= 0)
  //  console.log("numero positivo")
//else
  //  console.log("numero es negativo")

//14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
//número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

//let num = prompt("escribe un numero")

//if(num % 2 == 0)
  //  console.log("numero par")
//else
  //  console.log("numero impar")

//14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
//quin és el més gran. Només pots fer servir una instrucció if-else.

//let num1 = prompt("escribe un numero")
//let num2 = prompt("escribe un numero")

//if(num1 > num2)
   // console.log(num1)
//else
   // console.log(num2)

//14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
//quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
//comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
//tercer.

//let num1 = prompt("escribre un numero")
//let num2 = prompt("escribe un numero")
//let num3 = prompt("escribe un numero")

//if(num1 > num2 && num1>num3)
  //  console.log(num1)
//else if(num2 > num1 && num2 > num3)
  //  console.log(num2)
//else
  //  console.log(num3)

//14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
//consola els tres números ordenats. 

//let num1 = prompt("escribre un numero")
//let num2 = prompt("escribe un numero")
//let num3 = prompt("escribe un numero")
//let primer
//let segon
//let tercer

//if (num1 <= num2 && num1 <= num3) {
  //  primer = num1;
    //if (num2 <= num3) {
      //  segon = num2;
        //tercer = num3;
    //} else {
      //  segon = num3;
        //tercer = num2;
    //}
//} else if (num2 <= num1 && num2 <= num3) {
  //  primer = num2;
    //if (num1 <= num3) {
      //  segon = num1;
        //tercer = num3;
    //} else {
      //  segon = num3;
        //tercer = num1;
    //}
//} else {
  //  primer = num3;
    //if (num1 <= num2) {
      //  segon = num1;
        //tercer = num2;
    //} else {
      //  segon = num2;
        //tercer = num1;
    //}
//}
//console.log(primer,segon,tercer)

//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
//pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
//valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
//si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

//let carnet = prompt("la persona tiene carnet?")
//let prueba = prompt("ponga que dió en la prueba")

//if(carnet == "si" && prueba <= 0.25)
  //console.log("la persona puede conducir")
//else
  //console.log("la persona no puede conducir")

//13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
//el resultat de restar al nombre més gran el nombre més petit.

//let num1 = prompt("escribe un numero")
//let num2 = prompt("escribe un numero")
//let resta

//if(num1 > num2)
  //resta = num1 - num2

//else
  //resta = num2 - num1
//console.log(resta)

//14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
//quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.

//let numero = prompt("estroduce la cantidad que tienes que pagar")
//let envio = 4.95
//let precio

//if(numero > 30)
  //  precio = numero
//else if (numero > 0 && numero < 30 )
  //precio = numero + envio
//console.log("tienes que pagar" + " " + precio)

//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
//posa dues dades:
//1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
//3.95
//2. Quin d’aquests sabors vol:
//1. Vainilla o Xocolata. No cal afegir res
//2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
//3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
//Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
//dades mal introduïdes”
//Si totes les dades són correctes, escriurà el preu final.

//let tip = prompt("introduce tipo de helado (cono = c y tarina = t")
//let preciobase

//if(tip === "c")
  //preciobase = 3.45
//else if(tip=== "t")
  //preciobase = 3.95
//else
  //console.log("error datos mal introducidos")
//preciobase = null

//if(preciobase !== null)
  //let sabor = prompt("cual sabor?( vainilla, chocolate, turrón, menta, oreo, crema, arándanos, almendra")
//if(sabor === "vainilla" && sabor=="chocolate")
  //preciobase
  //else if(sabor === "turrón" && sabor === "menta"&& sabor === "oreo")
    //preciobase += 0.5
  //else if(sabor === "crema" && sabor === "arándanos" && sabor === "almendra")
    //preciobase += 1
  //else
    //console.log("error datos mal introducidos")
    //preciobase = null

//if(preciobase !== null)
  //console.log("el precio final es" + " " + preciobase + "euros" )







