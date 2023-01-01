// ----- IF Condition with Arithemtic and Comparison Operator -----

const x = 1;
const y = 1;

// x + y === 2 will resolve to a single boolean value: true

if(x + y === 2){
    console.log("The condition is true");
}



// ----- IF Condition with Logical Operator -----

const a = true;
const b = false;

// a || b will resolve to true
if(a || b){
    console.log("Using OR operator");
}

// a && b will resolve to false
if(a && b){
    console.log("Using AND operator");
}



// ----- SWITCH Condition -----

const fruit = "APPLE";

switch(fruit){
    case "APPLE":
        console.log("I am making apple juice");
        break;
    
    case "ORANGE":
        console.log("I am making orange juice");
        break;

    case "DURIAN":
        console.log("I shall simply eat the durian");
        break;
        
    default:
        console.log("I don't know what to do with this fruit");
        break;
}