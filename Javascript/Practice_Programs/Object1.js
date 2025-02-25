const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      isActive: true,
      purchases: [
        { item: "Laptop", price: 1200 },
        { item: "Headphones", price: 150 }
      ]
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      email: "bob@example.com",
      isActive: false,
      purchases: [
        { item: "Phone", price: 800 },
        { item: "Charger", price: 50 }
      ]
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      email: "charlie@example.com",
      isActive: true,
      purchases: [
        { item: "Tablet", price: 600 },
        { item: "Keyboard", price: 100 }
      ]
    },
    {
      id: 4,
      name: "David",
      age: 35,
      email: "david@example.com",
      isActive: true,
      purchases: [
        { item: "Monitor", price: 300 },
        { item: "Mouse", price: 40 }
      ]
    },
    {
      id: 5,
      name: "Emma",
      age: 22,
      email: "emma@example.com",
      isActive: false,
      purchases: [
        { item: "Smartwatch", price: 200 },
        { item: "Speaker", price: 100 }
      ]
    }
  ];

// Use map to create an array of user names.



const userNames = users.map((item) => {
    return item.name;
});
// console.log("Array of User Names",userNames)

// Use filter to get an array of only active users.
const Activeusers = users.filter((item) => item.isActive == true)
// console.log("Arrray of Active Users", Activeusers);
// Use reduce to calculate the total value of all purchases made by all users.

// const allPurchases = users.reduce((acc,item) => {
//     console.log("acc",acc,"item",item.purchases);
//     return acc + item.purchases;
// },0);

const allpurchasestotal = users.reduce((total, user) => {
    const usertotal = user.purchases.reduce((sum,purchases) => {
       return sum + purchases.price
    },0)
    return total + usertotal
},0)


// another way of writing this
const alltotal = users.reduce((total, user) => {
     const innertotal = user.purchases.reduce( (sum, purchases) => (sum + purchases.price),0)
     return total + innertotal;
},0)

// console.log("total price",alltotal);
// Use find to get the user object for a specific email (e.g., "charlie@example.com").

const charlieemail = users.find( (item) => (item.email == "charlie@example.com"));
// console.log("charliemail",charlieemail);

// Use some to check if any user is below the age of 25.
  
const checkuser = users.some( (item) => (item.age < 25));
// console.log(checkuser);

// Use forEach to log all user emails to the console.

const loguserEmails = users.forEach((item) => (
   // console.log(item.email)
   item.email
));

// Use map to create an array of objects with only id and name fields.

const idandName = users.map((item) => ([item.id , item.name]) )
// console.log(idandName);

// Use filter to get a list of users who have spent more than $500 in total purchases.

const spetmorethan500 = users.filter((user) => (
    user.purchases.reduce((acc, item) => (acc + item.price),0) > 500
));

// console.log(spetmorethan500);

// Use reduce to find out the total amount spent by active users only.
// here first find out active user only and after that some thier total spent

// const activeUsersSpent = users.filter((user) => (user.isActive)
//     .reduce((total, user) => (total + user.purchases.reduce((sum, purchases) => ( sum + purchases.price),0),0))
// );


// console.log(activeUsersSpent);

// Use map to modify the array and add a new field totalSpent in each user object (sum of their purchases).
const usersWithTotalSpent = users.map(user => ({
    ...user,
    totalSpent: user.purchases.reduce((sum, purchase) => sum + purchase.price, 0)
}));
// console.log(usersWithTotalSpent);



// Use sort to arrange users in ascending order based on age.
const arrangeassending = users.sort( (a,b) => (a.age - b.age));

console.log(arrangeassending);



// Use flatMap to get a single array of all purchased item names.

// Use some to check if at least one user has purchased a "Phone".
// const purchasedphone = users.some((item) => (
//     item.purchases.item == "phone"
// ))

// solution 2 the corrected one with insider array

const isPurchasedPhone = users.some((item) => (
    item.purchases.some((purchasedphone) => (purchasedphone.item === "Phone"))
));

// Explanation
    // First extract the users object and inside that we have purchases array so apply some on that to check thatˀ
// console.log(isPurchasedPhone);

// Use every to check if every user has an email address.

const everyuserhasemail = users.every((user) => (
      user.email !== undefined && user.email !== ""
))

console.log("Eceryuserhasemail",everyuserhasemail);