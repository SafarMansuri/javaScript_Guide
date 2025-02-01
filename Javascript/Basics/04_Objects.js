// Javascript Objects

// Declaring objects inside the JS

// Singleton
// const newobject = Object.create();

// console.log("NewObject", newobject) // Error

// Object litrals

const user = {
  name:"Safar",
  mobileNumer: 8347415555,
  email: "Safar@google.com",
  "full name": "Safar Mansuri",
  isLoggedIn: false,
  favColor: ["white", "green", "Orange"],
  greeting: function() {console.log("Heelo",this.name)},
}

// Now Accessing the js Object
 // There are two ways to access the js objects

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);

// using above two ways we can access the objects

// Note : Secound way is usefull becuase some times the object keys are there in the form of the
//    strings so using the secound approoch we can access them because at that time we don't have any
//    any other method to access that values

const symb = Symbol("ak1");

console.log(symb);

// adding values inside the Object

// object before adding any values
console.log(user);

user.newvalue = "new value";

console.log(user);

// or we can change the existing values if the currunt objects too

user.email = "safar@gmail.com";

console.log(user);

// accessing the functions inside the object

console.log(user.greeting());

// adding new function insdie the object

user.myNameandEmail = function() {
    console.log(`Hello ${this.name} your email is ${this.email}`)
}
console.log(user);

console.log("myNameandEmail", user.myNameandEmail());


// if we want to freeze the object means don't want to allow any modifications than we can do this

Object.freeze(user);