// Authentifier une personne

var password = "1234tomates";
var username = "admin"; 

var userInput = prompt("Quelle est votre username: ");
var passInput = prompt("Quelle est votre password: ");

if( username === userInput && password === passInput ) {
    console.log("Bonjour "+username+",\nBienvenue sur l'application");
} else {
    console.log("Le nom d'utilisateur et/ou le mot de passe est incorrecte, s'il vous plait veuillez recommencer.");
}