const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result =document.querySelector("#result");    
    if(height === "" || height < 0 || weight === "" || weight < 0){
        result.innerText = "Please enter valid values";
        
    } else{
     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerText = `Your BMI is ${bmi}`
    }
    
})