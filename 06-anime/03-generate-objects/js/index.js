let numberOfRects = 30
//let count = 0
//while (count < numberOfRects) {
//  let rect = document.createElement('div')
//  document.body.append(rect)
//  count += 1
//}
let fonts = [
  'Akronim',
  'Bowlby One SC',
  'Bungee Inline',
  'Bungee Shade',
  'Finger Paint',
  'Libre Barcode 39',
  'Modak',
  'Monoton'
]

for (var i = 0; i < numberOfRects; i++) {
  let div = document.createElement('div')
  let p = document.createElement('p')

  console.log(p.style.fontFamily);
  p.style.fontSize = `${anime.random(5,200)}px`
  p.style.color = `rgb(${anime.random(1,255)},${anime.random(1,255)},${anime.random(1,255)})`
  p.style.fontFamily = fonts[anime.random(0,7)]
  word = Math.random().toString(36).slice(-10)

  word.split('').forEach(letter => {
    let span = document.createElement('span')
    span.innerText = letter
    span.style.fontFamily = fonts[anime.random(0,7)]
    span.style.fontSize = `${anime.random(5,200)}px`
    span.style.color = `rgb(${anime.random(1,255)},${anime.random(1,255)},${anime.random(1,255)})`
    p.append(span)
  })

  p.style.transform = `translate(${anime.random(0,100)}vh,${anime.random(0,100)}vw)`


  div.style.height = `${anime.random(1,500)}px`
  div.style.width = `${anime.random(1,500)}px`
  div.style.background = `rgb(${anime.random(1,255)},${anime.random(1,255)},${anime.random(1,255)})`
  div.style.transform = `rotate(${anime.random(0,360)}deg) translate(${anime.random(0,100)}vh,${anime.random(0,100)}vw)`

  if (anime.random(1,2) === 1){
    div.style.borderRadius = '100%'
    div.style.width = div.style.height
  } else {
    div.style.borderRadius = '0'
  }

  div.onmouseenter = function(e) {
    let elStyle = e.target.style
    if (Number(elStyle.width.slice(0,-2)) === Number(elStyle.height.slice(0,-2))) {
      console.log(123);
    }
    elStyle.height = `${anime.random(1,500)}px`
    elStyle.width = `${anime.random(1,500)}px`
    elStyle.background = `rgb(${anime.random(1,255)},${anime.random(1,255)},${anime.random(1,255)})`
    elStyle.transform = `rotate(${anime.random(0,360)}deg) translate(${anime.random(0,50)}vh,${anime.random(0,50)}vw)`

    if (anime.random(1,2) === 1){
      div.style.borderRadius = '100%'
      div.style.width = div.style.height
    } else {
      div.style.borderRadius = '0'
    }
  }

  document.body.append(p)
  document.body.append(div)
}
