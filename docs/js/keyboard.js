const keyboard = document.getElementById("keyboard")
document.addEventListener("keydown", e => {
    const key = keyboard.getElementById(`${e.code}`)
    key.style.fill = "rgb(4, 139, 35)"
})
document.addEventListener("keyup", e => {
    const key = keyboard.getElementById(`${e.code}`)
    key.style.fill = "rgb(255, 255, 255)"
})

//const containerKeyboard = document.getElementById("containerKeyboard")
