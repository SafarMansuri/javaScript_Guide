const students = [
    { 
        id: 1, 
        name: "Alice", 
        age: 20, 
        gender: "Female", 
        scores: { math: 85, science: 90, english: 88 }, 
        attendance: [true, true, false, true, true] 
    },
    { 
        id: 2, 
        name: "Bob", 
        age: 22, 
        gender: "Male", 
        scores: { math: 78, science: 85, english: 80 }, 
        attendance: [true, false, true, true, true] 
    },
    { 
        id: 3, 
        name: "Charlie", 
        age: 21, 
        gender: "Male", 
        scores: { math: 92, science: 88, english: 91 }, 
        attendance: [true, true, true, true, true] 
    },
    { 
        id: 4, 
        name: "Diana", 
        age: 20, 
        gender: "Female", 
        scores: { math: 75, science: 70, english: 78 }, 
        attendance: [true, false, false, true, false] 
    },
    { 
        id: 5, 
        name: "Ethan", 
        age: 23, 
        gender: "Male", 
        scores: { math: 88, science: 92, english: 85 }, 
        attendance: [true, true, true, false, true] 
    }
];


// 🟢 Basic Challenges
// 1️⃣ Get an array of student names.
  
 const studentNames = students.map((item) => (item.name));
//  console.log("studentnames",studentNames);
 

// 2️⃣ Find all students who are 21 or older.
 
 const OlderStudents = students.filter((item) => (item.age >= 21));
//  console.log("OlderStudents",OlderStudents)

// 3️⃣ Calculate the average science score of all students.

 const averageScienceScore = students.reduce((acc, total) => {
   return acc + total.scores.science / total.scores.length
 },0) 

// 4️⃣ Find the student with the highest English score.

const HighestEnglishscore = students.reduce( (acc,stu) => {
    // console.log(` acc ${acc.scores.english} and student ${stu.scores.english} `);
    
    return stu.scores.english > acc.scores.english ? stu : acc
},students[0] )

// console.log("HighestEnglishscore",HighestEnglishscore);

// 5️⃣ Check if any student has an attendance record with all true (100% attendance).
 

const findalltrue = students.some( (stu) => stu.attendance.every(day => day))
// console.log("findalltrue",findalltrue);

// 🟠 Intermediate Challenges
// 6️⃣ Sort students by their math scores in descending order.

  const sortStudentDESC = [...students].sort( (a, b) => (b.scores.math - a.scores.math));
//   console.log("sortStudentDESC",sortStudentDESC);
  

// 7️⃣ Find the student with the lowest science score.
const lowestScienceScore = students.reduce( (acc,stu) => {
    // console.log(` acc ${acc.scores.science} and student ${stu.scores.science} `);
    
    return stu.scores.science > acc.scores.science ? acc : stu
},students[0] )

// console.log("lowestScienceScore",lowestScienceScore);


// 8️⃣ Create an array of objects containing student names and their average scores.

const studentnamesandscores = students.map( ({name , scores}) => (
    {
        name:name,
        averagescores : Math.round(scores.english + scores.math + scores.science / 3)
    }
) )
// console.log("studentnamesandscores",studentnamesandscores);

// 9️⃣ Get a list of students who have missed at least 2 classes.
const studentwithmissdclasses = students.filter((stu) => (
    stu.attendance.filter(attendance => !attendance)
))

// console.log("studentwithmissdclasses",studentwithmissdclasses);

// 🔟 Check if all students have an English score of at least 75.
const allstudentenglishscore = students.every((stu) => (stu.scores.english > 75))
// console.log("allstudentenglishscore",allstudentenglishscore);


// 🔴 Advanced Challenges
// 1️⃣1️⃣ Group students by gender.
// 1️⃣2️⃣ Find the best overall student (highest average score across all subjects).
// 1️⃣3️⃣ Create a new list where each student's scores are increased by 5%.
// 1️⃣4️⃣ Calculate the total number of classes missed by all students.
// 1️⃣5️⃣ Get a list of students whose most common attendance record is false (i.e., they were absent more often than present).