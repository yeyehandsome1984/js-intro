/*
    Task: Edit the switch condition to merge two cases

    In a typical software deployment resources, 
        - DEV environment requires 0 server provision
        - STAGE environment requires 1 server provision
        - PROD environment requires minimum 2 servers provision 

    Challenge: Edit the switch statement below to merge DEV and default case to provision 0 server provision
    Hint: Google "how to merge switch cases"
    Reference Link: https://www.w3schools.com/js/js_switch.asp
        - Check out the break keyword
        
    Once you completed this homework, you should understand what is the usage of "break" keyword in switch statement.
*/

const environment = "DEV";

switch(environment){
    case "PROD":
        console.log("2 servers provisioned");
        break;
    
    case "STAGE":
        console.log("1 server provisioned");
        break;

    case "DEV": // edit this case
        console.log("no provision");
        break;
    
    default:
        console.log("no provision");
        break;
}

