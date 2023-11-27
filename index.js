let buttons = document.querySelectorAll("button");
let operans = document.querySelectorAll("button.operands");
let operators = document.querySelectorAll("button.operator");
let del = document.querySelector("button#delete");
let allclear = document.querySelector("button#alclear");

let display = document.querySelector(".display");

let result = ""


buttons.forEach((x) => {
    x.addEventListener('click', (e) => {
        result += x.innerHTML
        display.innerHTML = result

    })
})


