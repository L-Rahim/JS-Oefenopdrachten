console.log("Main js werkt");

//opdracht 1

const list = ["school", "HTML", "CSS", "Javascript", "Python"];
 
const teRadenWoord = list[Math.floor(Math.random() * list.length)];
 
console.log("Welkom bij het woordraadspel!");
console.log("Typ 'quit' om te stoppen.");
 
const geraden = false;
 
while (!geraden) {
 const poging = prompt("Raad het woord: schoolvakken").toLowerCase();
   
    if (poging === "quit") {
        console.log("Bedankt voor het spelen. Het woord was: '" + teRadenWoord + "'.");
        break;
   }
   
    if (poging === teRadenWoord) {
        geraden = true;
        console.log("Correcte antwoord!: '" + teRadenWoord + "'.");
   } else {
        console.log("Verkeerde antwoord, probeer opnieuw!.");
     }
 }
