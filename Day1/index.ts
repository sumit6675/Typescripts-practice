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
