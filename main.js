
//variables and operators
console.log("Variables & Operators")
//exercise 1:
console.log("Exercise 1")
const maxCapacity = 14
let surfTime = true
let bestStudent
//const purposeInLife
console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
//console.log(purposeInLife)

//exercise 2:
console.log("Exercise 2")
const myVariable = "The potential of the future " // notice the space we're leaving at the end

const result = myVariable + "is the best thing ever"﻿

console.log(result) // logs "The potential of the future is the best thing ever"

let myVar = "The confidence "
myVar += "is the best thing ever"
console.log(myVar)

//exercise 3:
console.log("Exercise 3")
let password = "s6666"
let confirmPassword = "s6666"
let isEqual = password == confirmPassword
console.log(isEqual)

//exercise 4:
console.log("Exercise 4")
let num1 = 423 * 12
let num2 = 802 / 2
let num3 = (5+6) * 3
console.log(num1)
console.log(num2)
console.log(num3)

//exercise 5:
console.log("Exercise 5")
let exp1 = false
let exp2 = true
let exp3 = true
let exp4 = false
let exp5 = true 
let exp6 = true
let exp7 = false
let exp8 = true
let exp9 = null
console.log(exp1 == ((5>2)&&false))
console.log(exp2 == (!("knife"=="sword")))
console.log(exp3 == ((1<2)||-1>-1||!false))
console.log(exp4 == "")
console.log(exp5 == ((31%5)==1))
console.log(exp6 == (!!true))
console.log(exp7 == ("5th Avenue" != "5th Avenue"))
console.log(exp8 == (52 !== "52"))
console.log(exp9 == (undefined||null))

//exercise 6:
console.log("Exercise 6")
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
console.log(a == 0)
console.log(b == 0)
console.log(c == 2)

//conditional statements
console.log("Conditional Statements")

let enoughMoneyInBank = false
let hasJob = true
if(enoughMoneyInBank){
    console.log("buy a gift :)")
} else {
    if(hasJob){
        console.log("go to work!")
    } else {
        console.log("go find a job :(")
    }
}
//let userName = prompt("what is your username?")
//console.log(userName)

//exercise 1
console.log("Exercise 1")
let numChildren = Number(prompt("how many children do you have?"))
const isCareful = false
if(!isCareful){
    numChildren++
}
console.log(numChildren)

//exercise 2
console.log("Exercise 2")
let silverWareCount = Number(prompt("how many silver ware count do you have?"))
if(silverWareCount%2 != 0){
    console.log("There is something missing!")
}

//exercise 3
console.log("Exercise 3")
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance == "stellar"){
    salary += stellarBonus
    console.log("wow! salary increased by stellar bonus")
} else if(performance == "good"){
    salary += goodBonus
    console.log("salary increased by good bonus")
    }
console.log("salary is now :" + salary)

//exercise 4
console.log("exercise 4:")
const isVIP = false
let cash = 500
if(isVIP || cash>300){
    console.log("welcome to the club")
} else {
    console.log("Go away from here")
}

//Exercise 5
console.log("exercise 5:")
const a5 = 3 //a=3
let b5 = 2 //b=2
let c5 = 0 || 12 //c=12
let d5 //d undefined

b5 = c5 //b=true
b5++ //b=13
if(d5){ //falsey expression
  b5 = a5
}

d5 = a5 + (b5 * c5) //d=3+13*12=159
d5++ //d=160
b5 += 2 //b=15

//a=3
//b=15
//c=12
//d=160

console.log("a = " + a5)
console.log("b = " + b5)
console.log("c = " + c5)
console.log("d = " + d5)

//exercise 6
console.log("Exercise 6:")
const gender = null
let profession = "business"
if(!gender){
    profession += "person"
} else if(gender == "male"){
        profession += "man"
    } else if(gender == "female"){
        profession += "woman"
    }
console.log(profession) 

//exercise 7
console.log("exercise 7:")
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase >= 4){
        console.log("Would you like an upgrade?")
    } else {
        console.log("Are you satisfied with your car?")
    } 
} else if(boughtTesla){
    console.log("Would you like to move to the US?")
} else {
    console.log("are you interesting in buying a Tesla?")
}

