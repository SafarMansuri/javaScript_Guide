const orders = [
    {
        orderId: 101,
        customerName: "John Doe",
        email: "john@example.com",
        totalAmount: 250,
        status: "Delivered",
        items: [
            { product: "Shoes", price: 100, quantity: 1 },
            { product: "Backpack", price: 150, quantity: 1 }
        ]
    },
    {
        orderId: 102,
        customerName: "Jane Smith",
        email: "jane@example.com",
        totalAmount: 120,
        status: "Pending",
        items: [
            { product: "T-Shirt", price: 20, quantity: 2 },
            { product: "Jeans", price: 80, quantity: 1 }
        ]
    },
    {
        orderId: 103,
        customerName: "Michael Johnson",
        email: "michael@example.com",
        totalAmount: 500,
        status: "Delivered",
        items: [
            { product: "Smartphone", price: 500, quantity: 1 }
        ]
    },
    {
        orderId: 104,
        customerName: "Emily Davis",
        email: "emily@example.com",
        totalAmount: 300,
        status: "Cancelled",
        items: [
            { product: "Watch", price: 200, quantity: 1 },
            { product: "Sunglasses", price: 100, quantity: 1 }
        ]
    },
    {
        orderId: 105,
        customerName: "Chris Brown",
        email: "chris@example.com",
        totalAmount: 50,
        status: "Pending",
        items: [
            { product: "Cap", price: 25, quantity: 2 }
        ]
    }
];


// Challanges

// 10 JavaScript Challenges
// 🏆 Basic Challenges
// 1️⃣ Use map to create an array of customer names who placed orders.
    const arrayofCustomerNames = orders.map( (item) => item.customerName );
    // console.log("arrayofCustomerNames",arrayofCustomerNames);

// 2️⃣ Use filter to get all "Delivered" orders.
   
    const deliveredOrders = orders.filter( (item) => item.status === "Delivered")
    console.log("deliveredOrders",deliveredOrders);
// 3️⃣ Use reduce to find the total revenue generated from all delivered orders.
    const revenuegenerated = orders.filter( (item) => item.status === "Delivered")
                                .reduce((acc, total) => (acc + total.totalAmount),0)

     console.log("revenue Generated",revenuegenerated)                           

// 4️⃣ Use find to get the order details of a specific customer (e.g., michael@example.com).
   
    const orderDetailes = orders.find((item) => item.email === "michael@example.com");
    console.log("orderDetails",orderDetailes);
   
// 5️⃣ Use some to check if there are any orders with a total amount greater than $400.
    const checkTotalAmount = orders.some((item) => item.totalAmount > 400);
    console.log("checkTotalAmount", checkTotalAmount);
// =======================================================================
// 🚀 Advanced Challenges
// 6️⃣ Use every to check if all orders have a valid email address.
    const checkEmails = orders.every((item) => item.email !== undefined && item.email !== "")
    console.log("checkemails",checkEmails);
    
// 7️⃣ Use forEach to log each customer's email along with their order status.
 
    const logEmailandOrderStatus = orders.forEach((item) => {
        console.log(`Email is ${item.email} order status ${item.status}`);
    })
    
// 8️⃣ Use sort to arrange orders in descending order of total amount.
    const totalamountdscsort = orders.sort((a,b) => (b.totalAmount - a.totalAmount))
    console.log("totalAmountdscsort",totalamountdscsort);
// 9️⃣ Use flatMap to create a single array of all purchased product names.
    
    const purchasedproduct = orders.filter((item) => item.status === "Delivered")
                                    .flatMap((item) => ([item.items]))
    console.log("purchasedProducts",purchasedproduct);
// 🔟 Use reduce to find the total number of items sold across all orders.
 
   const allitemtotal = orders.reduce((acc, total) => (
       acc + total.items.reduce((sum, purchaseditem) => (sum + purchaseditem.quantity),0)
   ),0)

   console.log("alitems",allitemtotal);