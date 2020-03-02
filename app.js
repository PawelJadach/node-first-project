const os = require('os');
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Paweł', 'Krzysztof', 'Janusz', 'Andrzej', 'Łukasz', 'Mateusz', 'Józef', 'Bernard', 'Maurycy'];
const femaleNames = ['Natalia', 'Roksana', 'Paulina', 'Ala', 'Ola', 'Ula', 'Ida', 'Klaudia', 'Kamila'];
const lastNames = ['Kowalski', 'Nowak', 'Lewandowski', 'Xzy'];

randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const people = [];

for (let i = 0; i < 21; i++){
  const person = {
    'gender': randChoice(genders),
  }
  
    person.firstName = person.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames),
    person.lastName = randChoice(lastNames),
    person.age = Math.floor(Math.random() * 60 + 18),
  people.push(person);
}

const json = JSON.stringify(people);



fs.writeFile('people.json', json, (err) => {
  if (err) throw console.log('Something went wrong');;
  console.log('File has been successfully generated! Check people.json');
});