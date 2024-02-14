// js dom
let buttons = document.querySelectorAll("button");
let operands = document.querySelectorAll("button.operands");
let operators = document.querySelectorAll("button.operator");
let del = document.querySelector("button#delete");
let allclear = document.querySelector("button#alclear");
let display = document.querySelector(".display h1");
let calc = document.querySelector(".calculate");


// operator and operands

let operand1 = ""
let operrand2 = ""
let operator = "" 
let result; 



buttons.forEach((x) => {
    x.addEventListener('click', (e) => {
        if(x.className == "operator" && operator != "") {
            operand1 = operate()
            operrand2 = ""
            operator = ""
        }
        if(x.className == "operator" && operator === "") {
            operator += x.innerHTML
        } 


        if(x.className == "dot" && operator == "" && !operand1.includes(".") ) {
            operand1 += x.innerHTML
        }
        if(x.className == "dot" && operator != "" && !operrand2.includes(".") ) {
            operrand2 += x.innerHTML
        }



        if(x.className == "operands" && operator == "") {
            operand1 += x.innerHTML
        } 
        if(x.className == "operands" && operator != "" ) {
            operrand2+= x.innerHTML
        }
    
        
    })
})


function updisplay () {
    result = `${operand1}${operator}${operrand2}`
     display.innerHTML = result
}

buttons.forEach((x) =>  {
    x.addEventListener('click', updisplay)
})





function add (a,b) {
    return a+b;
}
function multiply (a,b) {
    return a*b;
}

function substruct (a,b) {
    return a-b;
}
function divide (a,b) {
    if(b = 0) {
        return "why you tryna   break my calc by dividing by zero"
    }
    return a/b;
}

function power (a,b) {
    return a**b;
}




function allclearf () {
 operand1 = ""
 operrand2 = ""
 operator = "" 
 result; 
}
//


function operate() { 
    let solution;
    switch(operator) {
        case"+":
        solution = add(Number(operand1),Number(operrand2));
        break;

        case"*":
        solution = multiply(Number(operand1),Number(operrand2));
        break;

        case"-":
        solution = substruct(Number(operand1),Number(operrand2));
        break;

        case"/":
        solution = divide(Number(operand1),Number(operrand2));
        if (solution === Infinity) {
            solution = "why you tryna break my calc by dividing by zero";

        }
        break;

        case"^":
        solution = power(Number(operand1),Number(operrand2));
        break;


        default:
        console.log("Invalid operator");
        break;
};

display.innerHTML = solution ;
if(solution == "why you tryna break my calc by dividing by zero" ){
    solution = "";
}
return solution;


}


calc.addEventListener("click", operate)
function clecal () {
    operand1 = operate()
    operrand2 = ""
    operator = "" 
   }
calc.addEventListener("click", clecal)





function backspace() {
    if (operrand2 !== "") {
        operrand2 = operrand2.slice(0, -1); // Remove the last character
    } else if (operator !== "") {
        operator = "";
    } else if (operand1 !== "") {
        operand1 = operand1.slice(0, -1); // Remove the last character
    }

    
}

del.addEventListener('click', backspace);









