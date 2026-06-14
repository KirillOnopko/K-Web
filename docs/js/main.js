const body = document.querySelector("body")
const header = document.querySelector("header")
const themeButton = document.querySelector("#themeButton")
const dropdownButton = document.querySelector("#dropdownButton")
const dropdownMenu = document.querySelector(".dropdownMenu")
const quadratClass = document.querySelectorAll(".quadrat")

const sunIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>`
const moonIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
    </svg>`

function applyTheme() { 
    const theme = localStorage.getItem("theme") || "light"
    if (theme === "light") {
        body.style.background ="rgb(245, 245, 245)";
        body.style.color="rgb(34, 34, 34)";
        themeButton.innerHTML = moonIcon
        quadratClass.forEach(q => {
            q.style.backgroundColor = "rgba(181, 181, 181, 0.7)"
        })
    } else {
        body.style.background = "rgb(30, 30, 30)"
        body.style.color = "rgb(229, 229, 229)"
        themeButton.innerHTML = sunIcon
        quadratClass.forEach(q => q.style.backgroundColor = "rgba(225, 52, 52, 0.7)")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme() 
})

themeButton.addEventListener("click", e => {
    const theme = localStorage.getItem("theme") || "light"
    if (theme==="light") {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
    applyTheme()
})

let dropdownFlag = false
dropdownButton.addEventListener("click", e => {
    if (!dropdownFlag) {
        dropdownMenu.style.display = "block"
        dropdownFlag = true
        dropdownButton.innerHTML = "Программы▲"
    } else {
        dropdownMenu.style.display = "none"
        dropdownFlag = false
        dropdownButton.innerHTML = "Программы▼"
    }
})



