

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
