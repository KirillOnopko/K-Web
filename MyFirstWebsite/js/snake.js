/* X КООРДИНАТА
for (let i=0;i<225;i++) {
    console.log(i%15 + 1)
} Y КООРДИНАТА
for (let i=0;i<225;i++) {
    console.log(Math.floor(i/15) + 1)
}
*/
const field = document.querySelector("#field")
for (let i=0;i<225;i++) {
    const quadrat = document.createElement("div")
    field.append(quadrat)
    quadrat.setAttribute("class", `y${Math.floor(i/15)+1}`)
    quadrat.setAttribute("class", `x${i%15 + 1}`)
    quadrat.style.width = "2rem"
    quadrat.style.height = "2rem"
    quadrat.style.margin = "0"
    if (i%2===0) {
        quadrat.style.background = "rgb(20, 171, 0)"
    } else {
        quadrat.style.background = "rgb(17, 138, 1)"
    }
}