let controller = new ScrollMagic.Controller()

let box = document.querySelector('.box') // or ('#box-1')
let boxAnimation = anime({
  targets: box,
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false,
})
//triggerHook
// 'onEnter' (0), 'onCenter' (0.5), 'onLeave' (1)
// or number from 1 to 0
new ScrollMagic.Scene({
  triggerElement: box,
  triggerHook: 'onLeave',
})
.addTo(controller)
.on('enter', function(){ //.on('enter', () => boxAnimation.play())
  boxAnimation.play()
})

//EXAMPLE 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80vw',
  rotate: '+=10turn',
  easing: 'linear',
  autoplay: false
})
let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', (event) => {
  box2Animation.seek(box2Animation.duration * event.progress)
})


// EXAMPLE 3

let lastSection = document.getElementById('last-section')
let loader = document.querySelector('.loader')
let circlesWrapper = document.querySelector('.circles-wrapper')

let loadingScene = new ScrollMagic.Scene({
  triggerElement: loader,
  triggerHook: 'onEnter'
})
.addTo(controller)
.on('enter', () => {
  addCircles(10)
  setTimeout(addCircles, 2000, 20)
})

function addCircles(amount) {
  let count = 0
  while (amount > count) {
    console.warn({count})
    let newDiv = document.createElement('div')
    newDiv.classList.add('circle')
    newDiv.style.background = getRandomRGBcolor()
    circlesWrapper.append(newDiv)
    count += 1
  }
}

function getRandomRGBcolor() {
  return rgb(${Math.round(Math.random * 255)}, ${Math.round(Math.random * 255)}, ${Math.round(Math.random * 255)})
}
