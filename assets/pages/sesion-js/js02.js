console.log("Sesión JS02 Uso de funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor
Código que se puede reutilizar

-------- Funciones declaradas-----
    (function declaration, function statment)
    Una característica de las funciones declaradas es que tienen hoisting

    hoisting: comportamiento en JavaScript que permite a la declaración de variables (usando var) o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

    sintaxis:
    function nombreFuncionCamelCase ( parámetros){
        //cuerpo de la función
        instrucciones; 
    }
*/
console.log(multiplica(4,3));

function multiplica(a,b){
    return a*b;
}


/*
-------- Funciones expresadas----------------
    (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas (no tienen nombre).
Las funciones expresadas no tiene hoisting, porque no se
cargan en memoria hasta que se utilice.

sintaxis: 
    const nombreVariable = function nombreFuncion (parámetros) {
        instrucciones; 
    };
*/

const sum = function sumatoria(a,b){
    return a+b;
}
console.log(`El resultado de 4 + 2: ${ sum (4,2)}`);

let saludo; //undefined
const localidad = "Tlaxcala";

if (localidad == "buenos aires"){
    saludo = function( name ) {return `Holis ${name}`};
}
else {
    saludo = function ( name) { return `Buenos días ${name}`};
}
console.log( saludo ("Sergio"));
console.log( saludo ("David"));

/*
----------Funciones autoinvocadas----------------
        (self-invoking functions)
    Funciones que se autoinvocan, se pueden definir con funciones anónimas.

    sintaxis: 
        (function (parámetros) {}) (argumentos);
*/
( function ( name ) {
    console.log(`Me llamo ${name} y me autoinvoco `);
}) ("ChatGPT");