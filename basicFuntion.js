function sayMyName(name) {
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
}

// sayMyName('Luiz');


function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(1, 2);
// console.log(result);

function loginUserMesssage(name = 'Guest') {
    return `Welcome ${name}`;
}

loginUserMesssage();
loginUserMesssage('John');
// console.log(loginUserMesssage("Najmul"));


function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(100 , 400, 500, 600, 700, 800, 900, 1000));


const user = {
    name: 'John',
    age: 30
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(user);


const myNewArray = [1, 2, 3, 4, 5];

function returnSecondItem(myArray) {
    return myArray[1];
}

console.log(returnSecondItem(myNewArray));