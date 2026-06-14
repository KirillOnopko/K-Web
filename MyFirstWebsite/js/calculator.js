const output = document.querySelector("#output")
const square = document.querySelector("#square")
const sqrt = document.querySelector("#sqrt")
const backspace = document.querySelector("#backspace")
const divide = document.querySelector("#divide")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const multiply = document.querySelector("#multiply")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const plus = document.querySelector("#plus")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const minus = document.querySelector("#minus")
const smile = document.querySelector("#smile")
const zero = document.querySelector("#zero")
const point = document.querySelector("#point")
const equals = document.querySelector("#equals")

let expression = "";
smile.addEventListener("click", e => {
    expression = ""
    output.textContent = expression
})
one.addEventListener("click", e => {
    expression += "1"
    output.textContent = expression
})
two.addEventListener("click", e => {
    expression += "2"
    output.textContent = expression
})
three.addEventListener("click", e => {
    expression += "3"
    output.textContent = expression
})
four.addEventListener("click", e => {
    expression += "4"
    output.textContent = expression
})
five.addEventListener("click", e => {
    expression += "5"
    output.textContent = expression
})
six.addEventListener("click", e => {
    expression += "6"
    output.textContent = expression
})
seven.addEventListener("click", e => {
    expression += "7"
    output.textContent = expression
})
eight.addEventListener("click", e => {
    expression += "8"
    output.textContent = expression
})
nine.addEventListener("click", e => {
    expression += "9"
    output.textContent = expression
})
zero.addEventListener("click", e => {
    expression += "0"
    output.textContent = expression
})
point.addEventListener("click", e => {
    expression += "."
    output.textContent = expression
})
multiply.addEventListener("click", e => {
    expression += "*"
    output.textContent = expression
})
divide.addEventListener("click", e => {
    expression += "/"
    output.textContent = expression
})
minus.addEventListener("click", e => {
    expression += "-"
    output.textContent = expression
})
plus.addEventListener("click", e => {
    expression += "+"
    output.textContent = expression
})
backspace.addEventListener("click", e => {
    expression = expression.slice(0, -1)
    output.textContent = expression
})
square.addEventListener("click", e => {
    expression += "**2"
    output.textContent = expression
})
sqrt.addEventListener("click", e => {
    expression += "**0.5"
    output.textContent = expression
})
equals.addEventListener("click", e => {
    expression = eval(expression).toFixed(2)
    output.textContent = expression
})