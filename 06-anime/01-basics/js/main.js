let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play

let propsAnim01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnim01.play

let valsAnim01 = anime({
  targets: '.vals .triangle',
  translateX: 100,
  duration: 3000,
  autoplay: false,
  easing: 'spring(5, 90, 5, 5)',
})
let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnim01.play
