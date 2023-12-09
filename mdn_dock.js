(function () {
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    console.log(`Hello ${yourName}`);
  }

  greetMe("World");
  /* End of your code */
})();


// higher oder array

const num = [1, 2, 3, 4, 5, 6];
num.forEach(element => {
    // console.log(element);
});


const obj = [
    {
    name: 'najmul',
    age: 22
    },
    {
    name: 'najmul houda',
    age: 23
    }

]


obj.forEach((element) => {
    // console.log(`${element.name} : ${element.age}`);
})

obj.map((element) => {
    console.log(`${element.name} : ${element.age}`);
})