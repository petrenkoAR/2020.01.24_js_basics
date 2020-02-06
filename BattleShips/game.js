let location1 = Math.floor(Math.random()*7)
let location2 = location1 + 1
let location3 = location2 + 1
let currentShot
let shots = 0
let hits = 0
let isSunk = false

while (isSunk === false) {
  currentShot = Number(prompt('Insert number from 0 to 9:'))
  if (currentShot <= 9 && currentShot >= 0){
    shots++
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      hits++
      alert('HIT!')
    } else {
      alert('MISS!')
    }
    if (currentShot === location1) {
      location1 = 'killed'
    }
    if (currentShot === location2) {
      location2 = 'killed'
    }
    if (currentShot === location3) {
      location3 = 'killed'
    }
    if (hits === 3) {
      isSunk = true
      alert('WIN!')
    }
  } else {
    alert('Mistake! Number must be from 0 to 9.')
  }

}
