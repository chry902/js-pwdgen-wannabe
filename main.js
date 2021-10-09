




const user_name = prompt("come ti chiami?");

console.log("dati", + user_name);

const last_name = prompt("qual è il tuo cognome?");

console.log("dati", + last_name);


const preferit_color = prompt("qual è il tuo colore preferito?");

console.log("dati", + preferit_color);


document.getElementById("dati").innerHTML = user_name + last_name + preferit_color + 21;
