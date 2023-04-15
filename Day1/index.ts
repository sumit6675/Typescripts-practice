//Functions Return Type
//Function return number string or boolean type
//if function not return anything then its type is void

function sum(a: number, b: number): string {
  // return a+b  give error because we want to return string type not number
  return `The Sum Is : ${a + b}`;
}
console.log(sum(12, 13));
//console.log(sum("sumit","chimkar")) give error

function concate(a: string, b: string): string {
  return `The Full Name is :${a} ${b}`; //here function return the string
}
console.log(concate("sumit", "chimkar"));

function concateName(a: string, b: string): void {
  console.log(`The Full Name is :${a} ${b}`); //here function return the nothing hence we use void return type
}
concate("sumit", "chimkar");

//Now let asign function to different variable and restrict the type of arguments and return values

// let sumTheNumber:(a:number,b:number)=>number=sum  
//this line gives error because sum return string ans we assign to number type return function
//correct way is:
let sumTheNumber:(a:number,b:number)=>string=sum  
console.log(sumTheNumber(12,13))
