

let car = {color: "white", numWheels: 4, isFancy: true}
// "The brown car has four wheels. It is fancy" ( or "It is not fancy", depending on isFancy
let sentence = "The " + car.color + " car has " + car.numWheels + " wheels. It is "
if(car.isFancy){
    sentence += "fancy"
} else {
    sentence += "not fancy"
}
console.log(sentence)

let insert = {item: "google", toBeginning: true, items: ["elevation", "microsoft", "intel"]}
if(insert.toBeginning){
    insert.items.unshift(insert.item)
} else {
    insert.items.push(insert.item)
}
console.log(insert.items)

const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

human[babyNameKey] = babyNameValue

console.log(human)
human.name = "Sana"
console.log(human)

let person = {
    firstName: "Dopple",
    lastName: "Ganger"
  }
  
  let p = person
  p.firstName= "Chappy"
  
  console.log(p)
  console.log(person)