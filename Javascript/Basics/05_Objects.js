// there are 2 ways to diclaring an object in js

const user = new Object(); // Signleton

// console.log(user); // {}

// using object literals

const realuser = {}

// console.log(realuser); // {}

// adding items inside the above object realuser

realuser.id = "123abc";
realuser.name = "safar";
realuser.idLoggedIn = false;

// console.log(realuser);

// object inside the object in 

const regularUser = {
    email: "safar",
    fullName : {
        userfullName: {
            firstName: "safar",
            lastName: "Mansuri"
        }
    },
    id: "123"
}

// console.log(regularUser);

// accesing firstName from the above object

// console.log(regularUser.fullName.userfullName.firstName);

// Merging the objects

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// above method will return output like this which is not appropriate

// There are other appropriate ways to merge 2 object

// using the assign method | where we are providing the source and target

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// in above we are assigning the obj1 and obj2 to the new empty object which will
// hold the values of both the objects

// we can also use modern ES6 spread oprator and which is prity much easy too

const obj4 = {...obj1, ...obj2}

// console.log(obj4); // which will return the same output as above

// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Array of Objects


const newUser = [
   {
     id:1,
     name:"safar"
   },
   {
    id:2,
    name:"pavan"
  },
  {
    id:3,
    name:"yatri"
  }
]

// console.log(newUser);

// accessing the first value of the above newUser Object

// console.log(newUser[0].name); // safar


// some object methods to access the keys and values of the object

// like we can access the only keys as well as only values of the object
// and which will return a array of them e.g

console.log(Object.keys(realuser));
console.log(Object.values(realuser));
console.log(Object.entries(realuser)); // returns array of single keys and values

// like this [ [ 'id', '123abc' ], [ 'name', 'safar' ], [ 'idLoggedIn', false ] ]

// we can also check the the property is there or not of the object

console.log(realuser.hasOwnProperty("safar")); // true
// above methods works with the keys only not values





















