let numero=5.4;
let palabra="hola mundo";
let respuesta= true;
const PI=3.14;
console.log(numero, palabra, respuesta, PI);
/*Operadores matematicos*/
let a=5;
let b=2;
let usuario="jesus";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("Hola "+ usuario); /*asi se concatena un string*/
/*Operaciones de incremento*/
console.log(a);
console.log(++a);/*si pongo el doble mas antes de la variable el me hace el incremento y luego me imprime el resultado*/
console.log(--a);/*de igual forma que el comentario anterior pero con decremento*/
/*Operadores de asignacion*/
a+=3;
console.log(a);/*en este caso el += funciona de la misma manera que el a=a+3*/
a-=3;
console.log(a);
a*=3;
console.log(a);
a/=3;
console.log(a);
a%=3;
console.log(a);/*como el codigo se lee de forma vertical la variable a cambia tras cada asignacion de tal suerte que el nuevo operador funciona con el nuevo valor de a en cada ocacion*/
/*String*/
/*Propiedades*/
let String = "Hola Mundo";
console.log(String.length);/*me permite saber el largo del string*/
console.log(String.toUpperCase());/*Me poermite cambiar el String a mayosculas*/
console.log(String.toLowerCase());/*Me permite cambiar el String a minusculas*/
console.log(String.indexOf('l'));/*me permite buscar un elemento en el string*/
console.log(String.replace('Mundo','YouTube'));/*me permite cambiar un elemento del string, en este caso utiliza dos parametros, el primeroes el parametro que buscara para ser reemplazado y el segundo es el parametro que cambiara*/
console.log(String.substring(2,8));/*este metodo me permite delimitar un string dentro de otro string, recibe dos parametros el primero es la posicion inicial del String y el segundo es la posicion final del mismo, el substring es una porcion del string inicial*/
console.log(String.slice(4));
console.log(String.slice(2,5));
console.log(String.slice(-3));/*este metodo permite cortar los elementos del string que se encuentren entre las posiciones establecidas entre los parametros que recibe*/
let String2 = '  Hola YouTube, estamos camellando con Strings   ';
console.log(String2.trim());/* este metodo permite eliminar los espacios al inicio y al final de un string*/
console.log(String.startsWith('H'));
console.log(String.startsWith('m',3));/* este metodo comprueba si el string inicia con el parametro que se introduce, responde con true o false segun sea el caso*/
console.log(String.endsWith('o'));
console.log(String.endsWith('a',4));/* funciona de la misma forma que el metodo anterior con la diferencia que valida el parametro finaldel String. El segundo parametro se puede colocar para incluir la longitur a tener en cuenta en la verificacion*/
console.log(String.repeat(5));
console.log('repetir'.repeat(10));/*este metodo me permite repetir el string o cualquier parametro que le sea asignado un numero x de veces donde x es el valor que solicita el metodo*/

/*TEMPLATE STRINGS*/
/* Sirven para simplificar el codigo en caso que el String que se desee incluir tenga algunas variables que hayan sido declaradas con anterioridad*/

let nombre = 'Jesus';
let apellido = 'Bastidas';
let edad = '35';

console.log('Hola '+ 'me llamo'+nombre+' '+apellido+". Tengo "+edad);
console.log(`Hola me llamo ${nombre} ${apellido}. Tengo ${edad}.`);

/* OBJETO MATH*/

console.log(Math.E);/*Constante de E*/
console.log(Math.PI);/*Constante de PI*/

let num = 5;
let num2 = -2;

console.log(Math.abs(num));/* devuelve el valor absoluto del numero que se le asigna a la variable */
console.log(Math.ceil(num2));/* devuelve el valor redondeado hacia arriba del numero que se asigna a la variable*/
console.log(Math.floor(num2));/* devuelve el valor redondearo hacia abajo del numero que se asigna a la variable*/
console.log(Math.pow(2,3));/* devuelve la operacion de potencia del primer valor de un numero, en donde el primer valor representa la base y el segundo la potencia*/
console.log(Math.random());/* genera un numero aleatorio */
console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*(100-50)+50));
console.log(Math.sign(0)); /* Retorna informacion sobre si un numero es positivo o negativo al incluirlo en como parametro en la funcion*/
console.log(Math.sqrt(27));/* retorna la raiz cuadrada del numero que se le coloca a la funcion*/

/*SENTENCIA IF - ELSE */

let num3 = 10

if(num3>0) console.log(`${num3} es mayor que 0`);

if(num3>0){
    console.log(`${num3} es mayor que 0`);
}else{
    console.log(`${num3} es menor que 0`);
}

let num4 = 0

if(num4>0){
    
    console.log(`${num4} es mayor a 0`);

} else if(num3<0){

    console.log(`${num4} es menor a 0`);

}else{

    console.log(`${num4} es igual a 0`);

}

/* dos operadores logicos a tener en cuenta &&=and,|| = o*/

if (num>0){
    if(num2>0){
        console.log(`${num} y ${num2} son mayores que 0`);

    }else if (num2<0){
        console.log(`${num} es mayor a 0 y ${num2} es menor que 0`);
    }else {
        console.log(`${num} es mayor que 0 y ${num2} es igual a 0`);

    }
}else if (num<0){
    if (num2>0){
        console.log(`${num} es menor que 0 y ${num2} es mayor que 0`);

    } else if (num2<0){
        console.log(`${num} y ${num2} son menores que 0`);

    }else {
        console.log(`${num} es menor que 0 y ${num2} es igual a 0`);
    }
}else {
    if (num2>0){
        console.log(`${num} es igual a 0 y ${num2} es mayor que 0`);
    } else if (num2<0){
        console.log(`${num} es igual a 0 y ${num2} es menor que 0`);

    }else {
        console.log(`${num} y ${num2} son iguales a 0`);
    }
}

/* EJEMPLO: ORDENAR TRES NUMERO DE MAYOR A MENOR */

let x = 10;
let y = 4;
let z = 6;

if (x>y){
    if(x>z){
        console.log(`${x}`);
    }else {
        console.log(`${z}`);
    }
    
}else {
    if(x>z){
        console.log(`${y}`);
    } else if (z>y){
        console.log(`${z}`);
    }
}

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let d = prompt('Introduzca el primer numero');
let e = prompt('Introduzca el segundo numero');
let f = prompt('Introduzca el tercer numero');

numbers.textContent = `Los numeros son: ${d}, ${e}, ${f}`;
