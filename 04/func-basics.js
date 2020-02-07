let secondName = "Ivanov"

function logUser() {
  let name = "Ivan"
  console.log(name + " " + secondName)
}

logUser()
console.log("secondName: " + secondName)
console.log("name: " + name)

function getFullName(name, secondName) {
  return console.log(`Full name: ${name} ${secondName}`)
}
getFullName()
console.log(getFullName("Mark", "Markov"))
let leoFullName = getFullName("Leonardo", "Pitt")
console.log(leoFullName)

//function sayHello(name) {
//  name = name || name
//}

function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Make ${cups} of coffee with milk..`)
  }
  return console.log(`Make ${cups} of coffee without anything..`)
}
makeCoffee(22, true)
makeCoffee(5, false)


//findMax()
function findMax(a, b) {
  if (a === b) {
    return 'numbers are the same'
  } else {
    if (a > b) {
      return a
    }
    return b
  }
}

//addOne()
function addOne(a) {
  return a + 1
}
let b = addOne(Math.floor(Math.random()*100))
console.log(b)

//showQuote()
function showQuote(text, author) {
  if (text !== undefined) {
    if (author === undefined) {
      author = 'Unknown author'
    }
    return console.log('"' + text + '" ' + author);
  }
  return
}

//nextEven()
function nextEven(num) {
}
