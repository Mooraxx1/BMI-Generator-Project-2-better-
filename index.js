const ageInputEl = document.querySelector(".ageInput");
const radioType = document.querySelector("radio");
const genderTypeMale = document.querySelector(".male");
const genderTypeFemale = document.querySelector(".female");
const heightIntake = document.querySelector(".heightIntake");
const weightIntake = document.querySelector(".weightIntake");
const calculteBTN = document.querySelector(".btnCalculate");
const bmiResult = document.querySelector(".bmiResult");
const extraHint = document.querySelector(".extraHintSpan");



// define the function
function calculateBMI(){
    const height = parseFloat (heightIntake.value) / 100;
    const weight = parseFloat (weightIntake.value);

    // validate input 
    if(!height || !weight || height <= 0 || weight <= 0){
        alert("please enter valid number");
        return;
    }

    // perform the calculate
    const bmiValue = (weight / (height * height)).toFixed(2);

    // display result 
    bmiResult.value = bmiValue;
    
    // logic
    if (bmiValue <18.5) {
        extraHint.innerText ="Underweight";
        extraHint.style.color = "orange";
    } else if (bmiValue <= 24.0){
        extraHint.innerText = "healthy";
        extraHint.style.color = "green";
    } else if (bmiValue <= 29.9){
        extraHint.innetText = "Overweight";
        extraHint.style.color = "blue";
    } else {
        extraHint.innerText = "obese";
        extraHint.style.color ="red";
    }
}
// generate bmi button 
calculteBTN.addEventListener("click",calculateBMI);



