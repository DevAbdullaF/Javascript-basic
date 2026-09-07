let student = {
  name: "Shakib",
  mark: 85
};

let grade;

if (student.mark >= 80) {
  grade = "A+";
} else if (student.mark >= 70) {
  grade = "A";
} else if (student.mark >= 60) {
  grade = "B";
} else if (student.mark >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log(student.name + " got Grade: " + grade);