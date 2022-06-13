/*process.argv.forEach((index, value) => {
    console.log(`${index}: ${value}`);
});

const colors = ['Blue', 'Yellow', 'Red', 'Green'];
console.table(colors);

const fruits = { apple: 15, mangos: 20 };
console.table(fruits);

const name = () => console.log("Jose");

const duration = () => {
    console.time(`name()`);

    name();
    console.timeEnd(`name()`);
}
duration();*/


/*
const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

name.question("Cual es su Nombre? ", name => {
    console.log(`Bienvenido ${name}`);
});*/

//const operation = require('./fuctions.js');

const {sum, pets}= require('./fuctions.js');

console.log(`Resultado de suma: ${sum(5,5)}`);

pets.forEach((pet)=>{
    console.log(pet);
});

