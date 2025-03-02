const employees = [
    {
        id: 1,
        name: "Alice Johnson",
        department: "Engineering",
        email: "alice@example.com",
        salary: 90000,
        performance: [
            { quarter: "Q1", rating: 4 },
            { quarter: "Q2", rating: 5 },
            { quarter: "Q3", rating: 4 },
            { quarter: "Q4", rating: 3 }
        ]
    },
    {
        id: 2,
        name: "Bob Smith",
        department: "Marketing",
        email: "bob@example.com",
        salary: 75000,
        performance: [
            { quarter: "Q1", rating: 3 },
            { quarter: "Q2", rating: 4 },
            { quarter: "Q3", rating: 5 },
            { quarter: "Q4", rating: 5 }
        ]
    },
    {
        id: 3,
        name: "Charlie Davis",
        department: "HR",
        email: "charlie@example.com",
        salary: 65000,
        performance: [
            { quarter: "Q1", rating: 5 },
            { quarter: "Q2", rating: 4 },
            { quarter: "Q3", rating: 3 },
            { quarter: "Q4", rating: 4 }
        ]
    },
    {
        id: 4,
        name: "Diana White",
        department: "Engineering",
        email: "diana@example.com",
        salary: 88000,
        performance: [
            { quarter: "Q1", rating: 4 },
            { quarter: "Q2", rating: 4 },
            { quarter: "Q3", rating: 5 },
            { quarter: "Q4", rating: 5 }
        ]
    },
    {
        id: 5,
        name: "Edward Green",
        department: "Marketing",
        email: "edward@example.com",
        salary: 72000,
        performance: [
            { quarter: "Q1", rating: 2 },
            { quarter: "Q2", rating: 3 },
            { quarter: "Q3", rating: 3 },
            { quarter: "Q4", rating: 4 }
        ]
    }
];

// 🏆 JavaScript Challenges
// 🚀 Basic Challenges
// 1️⃣ Get an array of employee names.
     const employeeNames = employees.map(({name}) => name)
     console.log(employeeNames)
// 2️⃣ Find all employees in the Engineering department.
   const engiineraringEmployees = employees.filter(({department}) => department === 'Engineering')
   console.log(engiineraringEmployees)
   // 3️⃣ Calculate the total salary of all employees.
    const totalSalary = employees.reduce((acc, {salary}) => acc + salary, 0)
    console.log(totalSalary)
// 4️⃣ Find the employee with the highest salary.
    const highestSalary = employees.reduce((acc, {salary}) => acc > salary ? acc : salary, 0)
    console.log(highestSalary)

// 5️⃣ Check if any employee has a salary below $70,000.
    const isSalaryBelow70k = employees.some(({salary}) => salary < 70000)
    console.log(isSalaryBelow70k)

// 🔥 Advanced Challenges 6️⃣ Sort employees by their salary in descending order.
    const sortedEmployees = employees.sort((a, b) => b.salary - a.salary)
    console.log(sortedEmployees)
// 7️⃣ Find the employee with the best average performance rating.
    const bestEmployee = employees.map(employee => {
        const totalRating = employee.performance.reduce((acc, {rating}) => acc + rating, 0)
        const avgRating = totalRating / employee.performance.length
        return {...employee, avgRating}
    }).sort((a, b) => b.avgRating - a.avgRating)[0]
    console.log(bestEmployee)
// 8️⃣ Create an array of objects with employee names and their average performance rating.
    const employeePerformance = employees.map(employee => {
        const totalRating = employee.performance.reduce((acc, {rating}) => acc + rating, 0)
        const avgRating = totalRating / employee.performance.length
        return {name: employee.name, avgRating}
    })
    console.log(employeePerformance)
// 9️⃣ Get a list of employees who had at least one quarter with a rating of 5.
    const employeesWithRating5 = employees.filter(employee => employee.performance.some(({rating}) => rating === 5))
    console.log(employeesWithRating5)
// 🔟 Find out if all employees have at least one quarter where their performance rating was 3 or above.
    const allEmployeesWithRating3 = employees.every(employee => employee.performance.some(({rating}) => rating >= 3))
    console.log(allEmployeesWithRating3)

// 🔧 Bonus Challenge (Extra Tough)
// 🎯 Identify employees eligible for a bonus!
// An employee gets a bonus if:

// Their average rating is 4.5 or above, AND
// Their salary is below $85,000
const eligibleForBonus = employees.filter(employee => {
    const totalRating = employee.performance.reduce((acc, {rating}) => acc + rating, 0)
    const avgRating = totalRating / employee.performance.length
    return avgRating >= 4.5 && employee.salary < 85000
})
console.log(eligibleForBonus)
