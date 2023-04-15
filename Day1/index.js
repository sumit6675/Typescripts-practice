//union type - if we are not conform about the type
//if below example user take inputs from user and add condition if both input
//is number then only add else concate the string with space between.
function conbine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
console.log(conbine(5, 10));
console.log(conbine("sumit", "chimkar"));
//Literal type - if we are not conform about the type
//if below example user take inputs from user and add condition if both input
//is number then only add else concate the string with space between.
//and if numbers are in string type then also add them
//identify the condition and do task accordingly
function conbineAnother(input1, input2, condition) {
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        condition === "Both are strings and add") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
console.log(conbineAnother(5, 10, "Both are strings and add"));
console.log(conbineAnother("5", "10", "Both are strings and add"));
console.log(conbineAnother("sumit", "chimkar", "Both are strings and concate"));
