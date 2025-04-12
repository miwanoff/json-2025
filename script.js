const studentJSON =
  '{"name": "John", "age": 25, "isStudent": false, "marks": [4, 5, 2, 3]}';
console.log(studentJSON);
const student = JSON.parse(studentJSON);
console.log(student);

let test = {
  title: "Test",
  subject: "JavaScript",
};

console.log(test);
let str = JSON.stringify(test);
console.log(str);

