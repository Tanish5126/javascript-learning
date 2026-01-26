//******** Local Variable *******//
// function showMessage(){
//     let message = "Hello world"
//     console.log(message);
// }

// showMessage()   //Prints the message




//******** Global Variable *******//

// let name = "Tanish";

// function showName(){
//     console.log(`My name is ${name}`);
// }

// showName()


//---------------------------------------------//

let name2 = "John"

function giveName(){
    name2 = "Steve";                // This will change value of global variable; so use let.(Variable Shadowing)
    console.log(`Hello ${name2}`);
    
}

console.log(name2)          // John   
giveName()                  // Steve

console.log(name2)          // Steve ('John' if let is used)