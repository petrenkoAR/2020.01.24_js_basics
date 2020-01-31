let location1 = 5
let location2 = 6
let location3 = 7
let currentShot
let shots = 0
let hits = 0
let isSunk = false

while (isSunk === false) {
  currentShot = Number(prompt('Insert number from 0 to 9:'))
  shots++
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    hits++
  }
  if (hits === 3) {
    isSunk = true
    alert('WIN!')
  }
}
