console.log("Hello world")
const h1 = document.getElementById("h1")
console.log(h1)
const b1 = document.getElementById("b1")

h1.style.color="red"
h1.style.backgroundColor="blue"

function buttonPressed(){
    const container = document.getElementById("container")
    console.log("I am the button")

    const ball = document.createElement('div')
    ball.className="ball"
    container.appendChild(ball)
}
b1.style.color="white"
b1.style.backgroundColor="red";
b1.onclick = buttonPressed

