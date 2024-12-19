const students=[{ name: "Alice1", age: 20, marks: { math: 85, science: 85, english: 80 } },
               { name: "Alice2", age: 21, marks: { math: 80, science: 80, english: 85 } },
               { name: "Alice3", age: 22, marks: { math: 75, science: 90, english: 90 } }
 ] 
students.push( { name: "Alice4", age: 24, marks: { math: 77, science: 93, english: 93 }})
const highest={name: "",AvgMarks: -1};
for (let i=0;i<students.length;i++){
const student=students[i]
const marks=Object.values(student.marks)
const AvgMarks=Math.floor(marks.reduce((sum,currvalue)=>{
    sum+=currvalue
    return sum
},0)/marks.length)
if(highest.AvgMarks<AvgMarks){
    highest.AvgMarks=AvgMarks;
    highest.name=students.name;
}
console.log(`${students.name} has an average of${AvgMarks}`)
}
console.log(`${highest.name} has an highest average of${highest.AvgMarks}`)