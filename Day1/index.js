//1. string type
function greet(name) {
    console.log("Hello ".concat(name));
}
greet("sumit");
//2. Number type
function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 20);
//3.Boolean Type
function greetperson(name, isValidPerson) {
    if (isValidPerson) {
        console.log("Hello " + name);
    }
    else {
        console.log("Invalid Name " + name);
    }
}
var Name = "sumit";
var isValidPerson = false;
greetperson(Name, isValidPerson);
//4.Arrays types
function getSum(numbers) {
    console.log(numbers.reduce(function (a, b) { return a + b; }));
}
getSum([1, 2, 3, 4, 5, 6]);
function greetAllPersons(names) {
    names.forEach(function (name) { return console.log("Hello " + name); });
}
greetAllPersons(["sumit", "ramdas", "roshan", "savita"]);
// Object Types
var personalDetails = {
    name: "sumit",
    age: 18,
    skills: ["coding", "problem solving"],
    hobbies: [10, "play"]
};
console.log(personalDetails);
