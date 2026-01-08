let students = ["Nika", "Ana", "Luka", "Mariam", "Nino"];

console.log(students.length);

students.push("Giorgi");
console.log(students);

students.unshift("Salome");
console.log(students);

students.pop();
students.shift();
console.log(students);

students.sort();
console.log(students);

let twoStudents = students.slice(2, 3);
console.log(twoStudents);

students.splice(2, 1);
console.log(students);

let group = {
  name: "React Group",
  students: ["Nika", "Ana", "Giorgi"],
};

console.log(group.students.length);

group.students.push("Mariam");
console.log(group.students);

group.students.pop();
console.log(group.students);

group.students.sort();
console.log(group.students);

let groupTwo = group.students.slice(0, 2);
console.log(groupTwo);

group.students.splice(1, 1);
group.students.push("Bacho", "Salome");
console.log(group.students);

const studentsData = [
  {
    id: 1,
    personal: {
      name: "Nia",
      age: 21,
      contact: {
        email: "Nia@mail.com",
        phone: {
          countryCode: "+995",
          number: "555123456",
        },
      },
    },
    education: {
      university: "Ilia State University",
      skills: ["JavaScript", "React", "React Native"],
    },
  },
  {
    id: 2,
    personal: {
      name: "Ana",
      age: 22,
      contact: {
        email: "ana@mail.com",
        phone: {
          countryCode: "+995",
          number: "599987654",
        },
      },
    },
    education: {
      university: "TSU",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  },
];

const name1 = studentsData[0].personal.name;
const age = studentsData[0].personal.age;
const email = studentsData[0].personal.contact.email;
const phone = studentsData[0].personal.contact.phone.countryCode;
const phone1 = studentsData[0].personal.contact.phone.number;
console.log(name1 + " " + age + " " + email + " " + phone + phone1);

const education = studentsData[0].education.university;
const skills = studentsData[0].education.skills;
console.log(education + " " + skills);

studentsData[0].education.skills[2] = "Expo";
console.log(studentsData[0].education.skills);
