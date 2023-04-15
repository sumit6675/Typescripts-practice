//1. string type
function greet(name: string) {
  console.log(`Hello ${name}`);
}
greet("sumit");

//2. Number type
function add(num1: number, num2: number) {
  console.log(num1 + num2);
}
add(10, 20);

//3.Boolean Type
function greetperson(name: string, isValidPerson: boolean) {
  if (isValidPerson) {
    console.log("Hello " + name);
  } else {
    console.log("Invalid Name " + name);
  }
}
const Name = "sumit";
const isValidPerson = false;
greetperson(Name, isValidPerson);

//4.Arrays types

function getSum(numbers: number[]) {
  console.log(numbers.reduce((a, b) => a + b));
}
getSum([1, 2, 3, 4, 5, 6]);

function greetAllPersons(names: string[]) {
  names.forEach((name) => console.log("Hello " + name));
}

greetAllPersons(["sumit", "ramdas", "roshan", "savita"]);

//5. Object Types

const personalDetails: {
  name: string; //string Type
  age: number; //Number Type
  skills: string[]; //Array Type All strings
  hobbies: [number, string]; //Tuple Type arr[0] is number and arr[1] is string
} = {
  name: "sumit",
  age: 18,
  skills: ["coding", "problem solving"],
  hobbies: [10, "play"],
};
console.log(personalDetails);

//6. Enum type

enum RoleNumber {
  Manager = 105,
  HR = 201,
  JrDeveloper = 65,
}
enum srNo {
  Manager,
  HR,
  JrDeveloper,
}

enum Role {
  Manager = "Manager",
  HR = "HR",
  JrDeveloper = "JrDeveloper",
}
//default it start with 0 , we can give any number, we can give any type as we want

const personalDetailsForCompany: {
  name: string; //string Type
  age: number; //Number Type
  skills: string[]; //Array Type All strings,
  srNo: number; //enum of defult type number
  role: string; //enum of string type
  roleNumber: number; //enum of number type explicitly
} = {
  name: "sumit",
  age: 18,
  skills: ["coding", "problem solving"],
  srNo: srNo.JrDeveloper,
  role: Role.JrDeveloper,
  roleNumber: RoleNumber.JrDeveloper,
};
console.log(personalDetailsForCompany);
