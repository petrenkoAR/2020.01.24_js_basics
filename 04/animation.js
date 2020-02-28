function reset() {
  window.location.reload()
}
let box = document.querySelector(".box")
box.style.backgroundColor = 'red'

function paintItBlack() {
  box.style.backgroundColor = 'black'
}

function makeCircle() {
  box.style.borderRadius = '50%'
}

function move() {
  box.style.marginLeft = '100px'
  box.style.marginTop = '100px'
}

function makeBlinking() {
  let bgColor = box.style.backgroundColor
  

}
