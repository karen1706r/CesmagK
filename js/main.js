// Lenguaje de programacion
// Interpretado, asincronico
// Basado en Eventos
// Orientado a objetos
// Estructuras de control
// Ejecucion en cliente- Comunicacion con el servidor
// Integra otras bibliotecas
// JQuery (document.getElementById(... ) -> $("#..."))
// AJAX (Solucitudes asincronicas)
// Define solicitudes como variables, funciones como parametro
// Callback -> funcines como parametros que se invocan al finalizar una funcion



// Variables: es no tipado explicitamente

// var -> definicion de una variable y existe en un bloque
// let -> definicion de una variable que cambia y existe en un bloque
// const -> definicoin de una variable que no cambia despues de su asignacion inicial y exite en un bloque


var name = "Pepito Perez"
var age = "24";
let email = "mail@mail.com";
const gender = true;
// '1' + 1 -> '11'
// == (verificar valor) -> ===(verificar valor y tipo)
// '1' == 1 -> true    '1' === 1 -> false


// Funciones
function makeSomething(Callback) {
    var time = 2000;
    setTimeout(
        function () {
            console.log("It's an asyncronic task.");
            Callback();
        },
        time
    );
}

function myCallBack() {
    console.log("Here is the call Back invocation.");
}

makeSomething(myCallBack);


function ifElseExample(myName, myAge) {
    if (myAge >= 18) {
        console.log(myName + "  You are an adult");
    } else {
        console.log(myName + "  You are a kid");
    }
}



function forExample() {
    for (let index = 0; index < 10; index++) {
        console.log("Interaction number:   " + index);
    }
}

function arrayExample() {
    var fruits = ["Mango", "Manzana", "Papaya", "Mora", "Uva"];
    console.log(fruits[3]);
    fruits.forEach(Element => {
        console.log(Element);
    });

    var ef= loadData();

    for (let index = 3; index < ef.length; index++) {
        const element = ef[index];
        console.log(element);
    }

}

function loadData(){
    var exoticFruits=["Sandía","Melon","Guaraná","Borojo"];
    return exoticFruits;
}

function workWithPerson() {
    
    console.log(person.name);
    person.sayHi();

    const per1=new Person ("Pepito", 30);
    const per2=new Person ("Maria", 25);

    console.log("Show person 1 object from class: ");
    per1.sayHi();

    console.log("Show person 2 object from class: ");
    per2.sayHi();
}

// selectChanged = function () {
//     alert("Cambió");
// }