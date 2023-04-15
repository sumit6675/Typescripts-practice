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

// Object Types
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
