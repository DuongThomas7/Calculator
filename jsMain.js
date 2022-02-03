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
    return first/second;
}

const buttons = document.querySelectorAll("button");
const runningTotal = document.getElementById("output");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList == "numbers") {
            if (runningTotal.textContent == 0) {
                runningTotal.textContent = button.textContent;
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
                console.log(runningTotal.textContent[0]);
                if (runningTotal.textContent[0] == "-"){
                    runningTotal.textContent = runningTotal.textContent.slice(1);
                }
                else {
                    runningTotal.textContent = "-" + runningTotal.textContent;
                }
            }
        }
    });


})