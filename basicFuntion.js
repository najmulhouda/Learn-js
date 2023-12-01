function sayMyName(name) {
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
    console.log(name);
}

sayMyName('Luiz');


function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(1, 2);
console.log(result);

function loginUserMesssage(name = 'Guest') {
    return `Welcome ${name}`;
}

loginUserMesssage();
loginUserMesssage('John');
console.log(loginUserMesssage("Najmul"));