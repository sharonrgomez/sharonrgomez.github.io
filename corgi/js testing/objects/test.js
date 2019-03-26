

// dog.name retrieves "Kelly"
// dog["name"] also retrieves "Kelly"
// cannot use dot notation if var name has space in it or is a number
var dog = {
  name: "Kelly",
  breed: "Shih Tzu",
  age: 4
}


// can change value of "her name" with
// cat["her name"]="Chowder"
var cat = {
  "her name":"Chowdie"
}

// different ways to create an object
var person = {}
person.name = "Juan";
person.age = 23;
person.town = "White Plains";

var myPerson = new Object();
myPerson.name = "Sharon";
myPerson.age = 23;
