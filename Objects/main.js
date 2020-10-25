

/*let car = {color: "white", numWheels: 4, isFancy: true}
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
  console.log(person)*/

  //exercise 1
  console.log("Exercise 1:")

let p1 = {name:"Sana", age:26, city:"Umm-Elfahem"}
let p2 = {name:"Ameen", age:30, city:"Umm-Elfahem"}
if(p1.age == p2.age){
    if(p1.city == p2.city){
        console.log("Ameen wanted to date Sana")
    } else {
        console.log("Ameen wanted to meet Sana, but couldn't")
    }
}

//exercise 2 
console.log("Exercise 2:")

let myList = [{name: "Sana", age: 26}, {name:"Ameen", age:30}]
console.log(myList)
myList[0].name = "Sanaa"
myList.splice(1)
console.log(myList)

//exercise 3
console.log("Exercise 3:")
let anotherList = [{name:"sozy", age:43},{name: "marry", age:16}]
console.log(anotherList)
myList.push(... anotherList)
console.log(myList)