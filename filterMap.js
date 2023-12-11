const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumber = number.map((n) => n * 2);
// console.log(newNumber);


const myNumber = number
.map((n) => n * 2)
.filter((n) => n > 10);
console.log(myNumber);