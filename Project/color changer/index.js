const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id)
        if(e.target.id === "red"){
            body.style.backgroundColor = "red";

            console.log("red")
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = "green";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "pink"){
            body.style.backgroundColor = "pink";
        }
    })
})