let person = {
    'name':'abcd',
    'person age':25,
    'contact': 123456790,
    'address': 'New Delhi, India'
}

console.log(person);

// console.log(person.age);

console.log(person['person age']);

for(let key in person){
    console.log(person[key]);
}