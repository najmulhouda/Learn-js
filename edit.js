const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
    });
})