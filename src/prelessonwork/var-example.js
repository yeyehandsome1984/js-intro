// Example of using var
var x = 0;

{
    var x = 2; // When using var, the variable on this line will replace line 2.
}

console.log("x is", x); // 2

// --------------------------------------------------------------------------------
// Example of using const or let
const y = 0;

{
    const y = 3; // When using const or let, this variable will not replace line 12.
}

console.log("y is",y); // 0