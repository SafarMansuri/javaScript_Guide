const orders = [
    {
      orderId: "ORD001",
      customer: "Alice",
      email: "alice@example.com",
      date: "2024-02-10",
      status: "Delivered",
      totalAmount: 250,
      items: [
        { productName: "Laptop", price: 200, quantity: 1 },
        { productName: "Mouse", price: 50, quantity: 1 }
      ]
    },
    {
      orderId: "ORD002",
      customer: "Bob",
      email: "bob@example.com",
      date: "2024-03-05",
      status: "Shipped",
      totalAmount: 500,
      items: [
        { productName: "Keyboard", price: 100, quantity: 2 },
        { productName: "Monitor", price: 300, quantity: 1 }
      ]
    },
    {
      orderId: "ORD003",
      customer: "Charlie",
      email: "charlie@example.com",
      date: "2024-01-15",
      status: "Processing",
      totalAmount: 1200,
      items: [
        { productName: "Phone", price: 1200, quantity: 1 }
      ]
    }
  ];
  // Level 1: Basic Challenges 🟢
  // 1️⃣ Get an array of all customer names.
     const allCustomers = orders.map(order => order.customer);
     console.log("allCustomers names Array",allCustomers)
  
  // 2️⃣ Find all orders with a status of "Shipped".
  
     const shippedorders = orders.filter( order => order.status === "Shipped")
  
      console.log("shippedorders",shippedorders)                           
  
  // 3️⃣ Calculate the total number of orders.
    
      const totalOrders = orders.length;
      console.log("totalOrders",totalOrders)
  
  // Level 2: Intermediate Challenges 🟠
  // 4️⃣ Get a list of all unique product names purchased. (Hint: Use flatMap() and new Set())
     const uniqueProduct = [...new Set(orders.flatMap(order => order.items).map(item => item.productName))]
    console.log("allproduct name",uniqueProduct)
  
  // 5️⃣ Find the order with the highest totalAmount. *(Hint: Use .reduce())
  
    const HighestTotalAmount = orders.reduce( (acc, total) => (
          //  console.log(`acc : ${acc} , total: ${total}`)
           total.totalAmount > acc.totalAmount ? total : acc
        ),orders[0])
         
      console.log("HighestTotalAmount",HighestTotalAmount)   
  
  // 6️⃣ Check if any order has a totalAmount greater than $1000. (Hint: Use .some())
  
     const totalAmount = orders.some( (item) => item.totalAmount > 1000 )
     console.log("totalAmount",totalAmount)
  
  // Level 3: Advanced Challenges 🔴
  // 7️⃣ Get the total number of items sold (sum of all quantities). (Hint: Use .flatMap() and .reduce())
    
     const totalNumberofItemsSold = orders.flatMap( order => order.items)
                                          .reduce((acc, items) => (acc + items.quantity),0)
     
     console.log("totalNumberofItemsSold : ", totalNumberofItemsSold)
  
  // 8️⃣ Modify each order to add a new field totalItems, which is the sum of item quantities. *(Hint: Use .map())
         const totalItemscount = orders.map(item => ({
             ...item,
             totalItems : item.items.reduce((acc, item) => (acc + item.quantity),0)
         }))
         console.log("totalItemscount : ",totalItemscount)
    
  // 9️⃣ Find the most popular product (the most frequently ordered product). (Hint: Use .flatMap() and .reduce() to count occurrences)
       
       const popularProduct = orders.flatMap(item => item.items)
       console.log("popularProduct",popularProduct)
      
  // Level 4: Expert Challenges 🟣
  // 🔟 Group orders by status (e.g., { Delivered: [...], Shipped: [...] }). (Hint: Use .reduce() with an object)
  // 1️⃣1️⃣ Write a function getTopCustomers(n) that returns the top n customers by totalAmount spent. *(Hint: Use .sort() and .slice(n))
  // 1️⃣2️⃣ Find the average totalAmount of all orders. (Hint: Use .reduce() and divide by the number of orders)
  
  