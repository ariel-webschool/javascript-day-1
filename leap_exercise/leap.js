var inputYear = prompt("Entrez une annee: ");

if(  ( inputYear % 4 == 0 && !( inputYear % 100 == 0 ) ) || inputYear % 400 == 0) {
    console.log("is leap year");
} else {
    console.log("not leap year");
}


var isMultipleFour = inputYear % 4 == 0;
var isMultipleHundred = inputYear % 100 == 0;
var isMultipleFourHundred = input % 400 == 0;

if( (isMultipleFour && !isMultipleHundred) || isMultipleFourHundred) {
    console.log("is leap year");
} else {
    console.log("not leap year");
}

