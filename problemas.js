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

//5.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
//de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.

//let num = prompt("escribe un numero del 1-12")

//switch(mes){
  //case 1:
    //console.log("enero")
    //break
    //case 2:
    //console.log("febrero")
    //break
  //case 3:
    //console.log("marzo")
    //break
  //case 4:
    //console.log("abril")
    //break
  //case 5:
    //console.log("mayo")
    //break
  //case 6:
    //console.log("junio")
    //break
  //case 7:
    //console.log("julio")
    //break 
  //case 8:
    //console.log("agosto")
    //break
  //case 9:
    //console.log("septiembre")
    //break
  //case 10:
    //console.log("octubre")
    //break
  //case 11:
    //console.log("noviembre")
    //break
  //case 2:
    //console.log("diciembre")
    //break
//}

//15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
//posa dues dades:
//1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
//3.95
//2. Quin d’aquests sabors vol:
//1. Vainilla o Xocolata. No cal afegir res
//2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
//3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
//Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
//Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
//dades mal introduïdes”.
//Si totes les dades són correctes, escriurà el preu final.


//let tipusGelat = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();


//let saborGelat = prompt(
  //"Tria un sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles"
//).toLowerCase();


//let costBase = 0;
//let increment = 0;
//let costFinal = 0;

//if (tipusGelat === "c") {
  //costBase = 3.45;
//} else if (tipusGelat === "t") {
  //costBase = 3.95;
//} else {
  //console.log("Error dades mal introduïdes del tipus de gelat");
//}
//switch (saborGelat) {
  //case "vainilla":
  //case "xocolata":
    //increment = 0;
    //break;
  //case ("turró", "menta", "oreo"):
    //increment = 0.5; 
    //break;
  //case "crema":
  //case "gerds":
  //case "ametlles":
   // increment = 1; 
    //break;
  //default:
    //console.log("Error dades mal introduïdes de sabor");
    //break;
//}

// Calculem el preu final si les dades són correctes
//if (costBase > 0 && increment >= 0) {
  //costFinal = costBase + increment;
  //console.log("El preu final del teu gelat és: " + costFinal.toFixed(2) + "€");
//}

//15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l -
  //dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o
  //festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.

  //let letra = prompt("l,m,x,j,v,s,d")

  //switch(letra){
    //case 1:
      //letra === l
      //console.log("día laborable")
    //break
    //case 2:
      //letra === m
      //console.log("día laborable")
    //break
    //case 3:
      //letra === x
      //console.log("día laborable")
    //break
    //case 4:
      //letra === j
      //console.log("día laborable")
    //break
    //case 5:
      //letra === v
      //console.log("día laborable")
    //break
    //case 6:
      // letra === s
       //console.log("día no laborable")
    //break
    //case 7:
      // letra === d
       //console.log("día no laborable")
    //break
    //default:
      //console.log("nada")
    //break
  //}
  //16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
//text “Estem fent bucles”. 

//for(let i=0; i<10; i++)
  //console.log("estem fent bucles")

//16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
//nombres del 5 al 20.

//for(let i = 5; i <= 20; i++)
  //console.log(i)

//16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els
//nombres entre 1 i N.

//let n = prompt("numero")
//let suma = 0
//for(let i = 1; i <= n; i++)
  //suma += i
//console.log("la suma 1 i" + n + "es" + suma)

//16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial
//d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N. 

//let n = prompt("numero")
//let multi = 1
//for(let i = 1; i <= n; i++)
  //multi *= i
//console.log("la multi 1 i" + n + "es" + multi)

//16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números
//parells entre 2 i N.

//let n = prompt("numero")
//let sumapar = 0

//for(let i = 2; i <= n; i += 2)
  //sumapar += i

//16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de
//multiplicar de N.
//let n = prompt("escribe un numero")
//let multi
  //for(let i = 1; i <= 10; i++)
    //multi = n*i
    //console.log(multi)

//16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de
//multiplicar de N.

//let n = prompt("numero")
//for(let i = n; i >= 1; i--)
 // console.log(i)

//16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)

//let n = prompt("introduce un numero")

//let asteriscos = ""
//for(let i = 0; i < n; i++)
  //asteriscos += "*"

//console.log(asteriscos)

//16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el
//  número introduït sigui 5).
  //*
  //**
  //***
  //****
  //*****

  //let n = prompt("escribe un numero")

  //for(let i = 1; i <= n; i++)
    //asteriscos = "";
  //for(let j = 1; j <= i; j++)
    //asteriscos += "*"

  //console.log(asteriscos)

 // 16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la
 // següent:
 /// Si N ← 2 i M ← 5
  //Sortida per consola:
  //2 22 222 2222 22222
  //La suma de la sèrie és:24690 

