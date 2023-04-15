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
//5. Object Types
var personalDetails = {
    name: "sumit",
    age: 18,
    skills: ["coding", "problem solving"],
    hobbies: [10, "play"]
};
console.log(personalDetails);
//6. Enum type
var RoleNumber;
(function (RoleNumber) {
    RoleNumber[RoleNumber["Manager"] = 105] = "Manager";
    RoleNumber[RoleNumber["HR"] = 201] = "HR";
    RoleNumber[RoleNumber["JrDeveloper"] = 65] = "JrDeveloper";
})(RoleNumber || (RoleNumber = {}));
var srNo;
(function (srNo) {
    srNo[srNo["Manager"] = 0] = "Manager";
    srNo[srNo["HR"] = 1] = "HR";
    srNo[srNo["JrDeveloper"] = 2] = "JrDeveloper";
})(srNo || (srNo = {}));
var Role;
(function (Role) {
    Role["Manager"] = "Manager";
    Role["HR"] = "HR";
    Role["JrDeveloper"] = "JrDeveloper";
})(Role || (Role = {}));
//default it start with 0 , we can give any number, we can give any type as we want
var personalDetailsForCompany = {
    name: "sumit",
    age: 18,
    skills: ["coding", "problem solving"],
    srNo: srNo.JrDeveloper,
    role: Role.JrDeveloper,
    roleNumber: RoleNumber.JrDeveloper
};
console.log(personalDetailsForCompany);
