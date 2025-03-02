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
  // Practice Questions:
  // Try solving the following using map, filter, reduce, forEach, find, some, every, etc.:
  
  // Use map to create an array of user names.
  
  const userNames  = users.map((item) => item.name);
  // console.log(userNames)
  
  // Use filter to get an array of only active users.
  
  const activeUsers = users.filter((item) => item.isActive);
  // console.log(activeUsers)
  
  // Use reduce to calculate the total value of all purchases made by all users.
  
  const allPurchases = users.reduce( (total, user) => {
      const userpurchases = user.purchases.reduce( (sum, purchases) => ( sum + purchases.price),0 )
      return total + userpurchases
  },0)
  // console.log("All purchases",allPurchases)
  // Use find to get the user object for a specific email (e.g., "charlie@example.com").
  
  // const specificEmail = users.find( (item) => item.email == "charlie@example.com" );
  
  // console.log(specificEmail)
  
  // Use some to check if any user is below the age of 25.
  const below25 = users.some( (item) => (item.age < 25))
  // console.log(below25);
  
  // Use every to check if all users have made at least one purchase.
  
  const purchaseConfirm = users.every( (user) => (user.purchases.length > 0));
  // console.log(purchaseConfirm)
  // Use forEach to log all user emails to the console.
  
  // users.forEach((user) => console.log(user.email))
  
  // Use map to create an array of objects with only id and name fields.
  const idandName = users.map( (item) => ([item.id, item.name]) )
  // console.log(idandName)
  // Use filter to get a list of users who have spent more than $500 in total purchases.
  
  const morethan500 = users.filter((user) => (
        user.purchases.reduce((sum, purchase) => ( sum + purchase.price),0) > 500
      ))
      
  console.log("morethan500",morethan500)    
      
  
  // Use reduce to find out the total amount spent by active users only.
  const totalspent = users.filter( (user) => user.isActive)
                             .reduce( (total, user) => {
                     const userpurchases = user.purchases.reduce( (sum,  purchases) => ( sum + purchases.price),0 )
                     return total + userpurchases
  },0)
                              
  // console.log(totalspent)                            
  
  // Use map to modify the array and add a new field totalSpent in each user object (sum of their purchases).
  
  const modifyObject = users.map((user) => (
      {
          ...user,
          totalspent: user.purchases.reduce((acc, total) => (acc + total.price),0)
      }
      ))
  console.log("modifyObject",modifyObject)    
      
      
  // console.log(newFiled)    
  
  // Use sort to arrange users in ascending order based on age.
  
  const AssendingbyAge = users.sort( (a,b) => (a.age - b.age));
  // console.log(AssendingbyAge)
  
  // Use flatMap to get a single array of all purchased item names.
  
  
  
  // Use some to check if at least one user has purchased a "Phone".
  
  const findPurchase = users.some( (user) => (
         user.purchases.some( (isphone) => (isphone.item == "Phone"))
      ))
  // console.log(findPurchase)    
      
      
  
  // Use every to check if every user has an email address.
  
  const emailcheck  = users.every((user) => (
       user.email !== undefined && user.email !== ""
      ))
      
  console.log(emailcheck)    
  
  
  