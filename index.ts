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
const double = (x: number, y: number, z: Number) => (x*y*z);
const res = double(6,6,6);
console.log(res);

// USING FUNCTION BACKTICK ${}
function greet(user = "Anonymous"){
    return `Hello ${user}`;
}
const res1 = greet();
console.log(res1);

export{}