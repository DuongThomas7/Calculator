function add(first, second){
    return first+second;
}

function subtract(first, second){
    return first-second;
}

function multiply(first, second){
    return first*second;
}

function divide(first, second){
    return parseFloat(first)/parseFloat(second);
}

function equal(){
    switch (userCalculation) {
        case "divide":
            return divide(outputOne.textContent, runningTotal.textContent);
        case "multiply":
            return multiply(outputOne.textContent, runningTotal.textContent);
        case "add":
            return add(outputOne.textContent, runningTotal.textContent);
        case "subtract":
            return subtract(outputOne.textContent, runningTotal.textContent);
    }
}

let userCalculation = "";


const buttons = document.querySelectorAll("button");
const runningTotal = document.getElementById("output");
const outputOne = document.getElementById("outputOne");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (runningTotal.textContent.length >= 19) {
            runningTotal.textContent = runningTotal.textContent.slice(0,19);
        }
        if (button.classList == "numbers") {
            if (runningTotal.textContent == 0) {
                runningTotal.textContent = button.textContent;
            }
            else if (button.id == "decimal") {
                if (runningTotal.textContent.includes(".")){
                    console.log("ERROR - MULTIPLE DECIMALS");
                }
                else {
                    runningTotal.textContent += button.textContent;
                }
            }
            else {
                runningTotal.textContent += button.textContent;
            }
        }

        else if (button.classList == "alternative") {
            if (button.id == "clear") {
                runningTotal.textContent = 0;
            }
            else if (button.id == "sign") {
                if (runningTotal.textContent[0] == "-"){
                    runningTotal.textContent = runningTotal.textContent.slice(1);
                }
                else {
                    runningTotal.textContent = "-" + runningTotal.textContent;
                }
            }

            else {
                runningTotal.textContent = runningTotal.textContent/100;
            }
        }

        else {
            
            if (button.id == "divide") {
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = 0;
                userCalculation = "divide";
            }
            else if (button.id == "multiply") {
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = 0;
                userCalculation = "multiply";
            }
            else if (button.id == "subtract") {
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = 0;
                userCalculation = "subtract";
            }
            else if (button.id == "add") {
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = 0;
                userCalculation = "add";
            }
            else {
                let placeHolder = runningTotal.textContent;
                runningTotal.textContent = equal();
                outputOne.textContent = placeHolder;
            }
        }
    });


})