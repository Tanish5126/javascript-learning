"use strict"; //treats all code as newer version

// alert ( 3 + 3) // we are using nodejs, not browser


// Primitive Datatypes

let name = "Tanish";        // String
let age = 19                // number
let isloggedin = true       // Boolean
let userstate = ""          // undefined
let city = null             // object  
const id = Symbol("123")    // symbol
const AnotherId = Symbol("123")   //symbol
const bigNumber =472048204859020358302n  //BigInt

console.log(typeof "Tanish")
console.log(typeof null)
console.log(id)
console.log(AnotherId)
console.log(AnotherId === id)  // Even if result is same , symbols are not equal
console.log(typeof bigNumber)



//---------------------------------------------------//




// Non - Primitive Datatypes

const heros = ["Ironman" , "Hulk" , "CaptainAmerica" , "Spiderman"]          //Arrays
console.log(heros);

let myobj = {                 //Objects
    name : "Tanish",
    age : 19
}
console.log(myobj);


  
const myFunction = function() {         //Functions
    console.log("Hello world");    
    
}
console.log(myFunction());



