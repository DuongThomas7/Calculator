function add(first, second){
    return parseFloat(first)+parseFloat(second);
}

function subtract(first, second){
    return parseFloat(first)-parseFloat(second);
}

function multiply(first, second){
    return parseFloat(first)*parseFloat(second);
}

function divide(first, second){
    return parseFloat(first)/parseFloat(second);
}

function equalCheck(){
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

function equal(){
    if (userCalculation){
        let placeHolder = runningTotal.textContent;
        runningTotal.textContent = equalCheck();
        outputOne.textContent = placeHolder;
        userCalculation = "";
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
            else if (!outputOne.textContent && userCalculation != ""){
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = button.textContent;
            }
            else {
                runningTotal.textContent += button.textContent;
            }
        }

        else if (button.classList == "alternative") {
            if (button.id == "clear") {
                runningTotal.textContent = 0;
                outputOne.textContent = "";
                userCalculation = "";
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
            console.log(button.id);
            if (!outputOne.textContent){
                outputOne.textContent = runningTotal.textContent;
                runningTotal.textContent = 0;

                if (button.id == "divide") {
                    userCalculation = button.id;
                }
                else if (button.id == "multiply") {
                    userCalculation = button.id;
                }
                else if (button.id == "subtract") {
                    userCalculation = button.id;
                }
                else if (button.id == "add") {
                    userCalculation = button.id;
                }
                else {
                    equal();
                }
            }
            else {
                if (button.id == "multiply") {
                    equal()
                    outputOne.textContent = "";
                    userCalculation = button.id;
                }
                else if (button.id == "divide") {
                    equal()
                    outputOne.textContent = "";
                    userCalculation = button.id;
                }
                else if (button.id == "add") {
                    equal()
                    outputOne.textContent = "";
                    userCalculation = button.id;
                }
                else if (button.id == "subtract") {
                    equal()
                    outputOne.textContent = "";
                    userCalculation = button.id;
                }
                else {
                    equal();
                }
            }
        }
    });


})