 const  user = {
     name: 'najmul',
     age: 22,
      sayMyName : function() {
        //  console.log(this.name);
     },
    
    
 
 }
user.sayMyName()

user.name = 'najmul houda'
user.sayMyName();

// console.log(this)

// console.log(sayMyName())


// const vari = () => {
//     // console.log(this);
// }

// vari()



(sayMyName = () => {
    console.log(gandu);
})(gandu = 'najmul houda');

// IIFE with arguments
(function(message) {
  console.log(message);
})("Hello, I'm an IIFE!");


// Arrow function within an IIFE
(() => {
  // Your code here
  console.log("This is an IIFE with an arrow function!");
})();
