console.log("Dhanush is practicing TS");

for(let i=1; i<4; i++){
    console.log(i);
}

function addOne(num: number){
    return num+=1;
}

// let userInput = readline("Enter no: ");
var sum = addOne(10);
console.log(sum);

// USING ARROW => FUNCTION
const double = (x: number, y: number, z: number) => (x*y*z);
const res = double(6,6,6);
console.log(res);

// USING FUNCTION BACKTICK ${}
function greet(user = "Anonymous"){
    return `Hello ${user}`;
}
const res1 = greet();
console.log(res1);

// ANONYMOUS FUNCTION 
const double2 = (x: number): number => x * x;
console.log(double2(9));

var num: number[] = [1,2,3,4];
var names: Array<string> = ["Alice", "Bob", "Charlie"];
var values: Array<number> = [1,2,3,4,5,6];

console.log(num);
console.log(names);
console.log(values);

const items: string[] = [];
items.push("keyboard");
items.push("Monitor");
items.push("CPU");
console.log(items);

let items1: Array<string> = ["ABC", "DEF", "GHI"];
console.log(items1);


export{}
