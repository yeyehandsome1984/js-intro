/*
    Task 1: Understanding Comparison Operator

    The current comparison operator "===" does not resolve to true. Change "===" to something else so that the condition is true and the code block will be executed. 
    Search for JavaScript's comparison operator chart and determine which other operator is most suitable for this case.
*/

const num = 10;
const str = "10";

if(num == str){ // Change the comparison operator
    console.log("Condition is true!");
}


/*

    Task 2: Discover the "else" and "if-else" condition flow

    This is not taught in the lesson and in this homework, you are to self-learn the complete if-statement operations. 

    You are to complete the challenge below with the following condition:

    - if weather is "rainy" and temperature is above 23, console log "I am bringing an umbrella"
    - if weather is "rainy" and temperature is 23 and below, console log "I am wearing a raincoat"
    - if weather is "snowy" irregardless of temperature, console log "I am wearing padded jacket"    
    - otherwise, console log "Sunny Day"
*/

// Add code here
const weather = "rainy";
const temperature = 21;

if(weather === "rainy" && temperature >23){ // This condition will be checked first

    console.log("I am bringing an umbrella");    

}else if(weather === "rainy" && temperature <=23){  // This condition will be checked second

    console.log("I am wearing a raincoat");

}else if(weather === "snowy" ){  // This condition will be checked second

    console.log("I am wearing padded jacket");

}
else{ // This condition will execute when none conditions above is true
    
    console.log("it is sunny date");
}

// ----- Example: for your observation ----- 



// ----- Challenge: for your action -----



// Add code here



/*

    Advanced Task (Optional): Ternary Operator (shortcut to if-else with assignment)

    Based on the BMI, assign the right value to "healthStatus".

    If your BMI is less than 18.5, it falls within the underweight range.
    If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range.
    If your BMI is 25.0 to 29.9, it falls within the overweight range.
    If your BMI is 30.0 or higher, it falls within the obese range.

*/

// ----- Example - for your observation -----

let isTall = false;
const height = 170; // assuming 170 and above is considered tall

// Example using IF

if(height >= 170)
    isTall = true;
else
    isTall = false;

// Example of Ternary Operator

isTall = height >= 170 ? true : false; // if-else in a single line


// ----- Challenge - for your action -----

let isHealthy = false;
const bmi = 25;

// Refactor the if-else statement to use ternary operator
if(bmi < 18.5 || bmi > 24.9) 
    isHealthy = false;
else
    isHealthy = true;