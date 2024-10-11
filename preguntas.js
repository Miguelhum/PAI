//2.1.- Què passaria si féssim aquestes declaracions de variables?
// Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
// i veure que passa (si passa alguna cosa).

var a = 1;
var a = 2;
console.log(a); // da 2
// b.-
var a = 1;
let a = 2;
console.log(a);Error
c.-
let a = 1;
var a = 2;
console.log(a); da 2
d.-
let a = 1;
let a = 2;
console.log(a); Error

//3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació si fos independent.
let a = 5; //SI
let b = 5z;
let c = "c"; SI
let c = "c';
let c = "c'c'c"; si
let c = "c'c"c';
let n = 35; SI
let n = 35va;

//3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
Fixa't en l'error que et dona el navegador.
let a = 5;
let b = c;
c = 7; 
c no está definida. la línia incorrecta es la 2.


//3.3.- De quins tipus són les dades que assignem a aquestes variables?
let a = 55; Numéricas
let b = 55.5; Numéricas
let c = "Hola"; string
let d = 'Hola'; string
let e = true; Lógicas

//4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 25;
let b = 15 + a;
let c = b * 2;
console.log(a,b,c); 
R/: 25,40,80

//4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 10;
let b = 20;
let c = 5;
a = a + 3; //13
b = b + 4 - a; //11
c = a + b + c; //29
a = a + c; //42
b = 4;// 4
c = c + 3 - b + 2;//30
console.log(a,b,c);
R/: 42,4,30

//4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
Escriu-los en un paper i desprès executa el codi. Et donen el mateix?
let a = 5;
let b = 18;
let c = 15;
let d = 22;
a = a + 10;
b = b + 5 - c;
c = c + 4 + b;
d = d + b + a;
a = a + 1;
b = b + c;
c = b + c;
d = b + b;
console.log (a,b,c,d)
R/: 16,36,64,72.

//4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
sobre paper i desprès prova a l’ordinador.
let a = 10
let b = 20
let c = 5
a = a + 3 // Fixat en aquesta instrucció.
// Quin valor tenia la variable a abans
// d’executar-se la instrucció?
// I desprès?
console.log(a);//13
b = b + 4 – a
console.log(b);//14
c = a + b + c
console.log(c);//
a = a + c
console.log(a);
b = 4
console.log(b);
c = c + 3 - b + 2
console.log(c);

//4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
sobre paper i desprès prova a l’ordinador.
let a = 5;
let b = 18;
let c = 15;
let d = 22;
a = a + 10;
b = b + 5 - c;
c = c + 4 + b;
d = d + b + a;
console.log(a,b,c,d);
a = a + 1;
b = b + c;
c = b + c;
d = b + b;
console.log(a,b,c,d);

//4.6. - Quins valors s’escriuran a la consola si executem aquest programa?
let a = 10;
let b = 5;
let c = a / b;
let d = a * b;
let e = a % 3;
console.log (c,d,e);

//4.7.- Quins valors s’escriuran a la consola si executem aquest programa?
let a = 10;
let b = 5;
let c = a * b * 3;
let d = a / 3;
console.log(c,d);

//5.1.- Què s’escriurà a la consola si executem aquest codi?
let a = 5;
a++;
console.log(a);//6
let b = a++;
console.log(a,b);
R/:6,6

//5.2.- Què s’escriurà a la consola si executem aquest codi?
let a = 5;
++a;
console.log(a);
let b = ++a;
console.log(a,b); 
R/6,6

//5.3.- Observa aquestes operacions, prova a executar-les i explica el perquè dels resultats
obtinguts.
let a = 5;
let b = a++;
let c = a--;
console.log(a,b,c);
R/: 5,6,4

a = 5;
b = ++a;
c = --a;
console.log(a,b,c);
R/:5,6,4

a = 5;
let d = 25 + a++;
a = 5;
let e = 25 + ++a;
console.log(d,e);
R/:31,31

//6.1.- Què s’escriurà a la consola si executes aquest codi?
let a = 10;
a += 5;
console.log(a);//true
a *= 5;
console.log(a);/error
a -= 5;
console.log(a);/false
a /= 5;
console.log(a);/error

//7.1.- Quines d’aquestes assignacions de cadenes de caràcters són incorrectes?
let a = "Hola"; correcto
let b = 'Hola'; correcto
let c = 'Hola"; incorrecto
let d = "Hola 'gramola'";correcto
let e = 'Hola "gramola'";incorrecto

//7.2.- Què s’escriurà a la consola si executes aquest codi?
let a = "Hola";
let b = "Adéu";
console.log (a+b);//holaadéu.
let c = a + 2;
console.log (c);Hola2.