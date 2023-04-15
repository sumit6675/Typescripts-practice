//union type - if we are not conform about the type
//if below example user take inputs from user and add condition if both input
//is number then only add else concate the string with space between.

function conbine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
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
// using type aliases=string|number sae the time and space use can make our own aliases accoringly
//for ex. type conbine_Condition="Both are strings and concate" | "Both are strings and add"
//and use conbine_Condition insted of "Both are strings and concate" | "Both are strings and add"

type aliases = string | number;

function conbineAnother(
  input1: aliases,
  input2: aliases,
  condition: "Both are strings and concate" | "Both are strings and add"
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    condition === "Both are strings and add"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + " " + input2.toString();
  }
}
console.log(conbineAnother(5, 10, "Both are strings and add"));
console.log(conbineAnother("5", "10", "Both are strings and add"));
console.log(conbineAnother("sumit", "chimkar", "Both are strings and concate"));
