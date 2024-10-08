// grade.js

var note = prompt("Entrez votre note: ");

if(note <= 100 && note >= 90) {
    console.log("A");
} else if (note <= 89 && note >= 80) {
    console.log("B");
} else if (note <= 79 && note >= 70) {
    console.log("C");
} else if (note <= 69 && note >= 60) {
    console.log("D");
} else if (note <= 59 && note >= 0) {
    console.log("F");
} else {
    console.log("La note que vous avez rentrez n'existe pas")
}
