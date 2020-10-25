

/*let myStuff = ['laptop', 'iphone', 'notebook']
console.log(myStuff[1])
myStuff.push(myStuff[0])
myStuff.unshift(myStuff[2])
console.log(myStuff)
myStuff.push(... myStuff)
console.log(myStuff)
myStuff.splice(0,1)
let array = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
array.splice(0,array.length-1)
console.log(array)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)


const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]

let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
console.log("The first plant is " + plants[0] + ", and the last one is " + plants[lastIndex])*/

//arrays exercise
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let newGenes = []
newGenes.push(genes[0],genes[1])
newGenes.splice(2,0,"CRYZ","AZIN2","RLF")
let removed = newGenes.splice(3,1)
newGenes.push(removed[0],removed[0])
newGenes.splice(0,0,"FXT")
console.log(newGenes)
