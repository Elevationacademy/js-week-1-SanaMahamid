
const tellAJoke = function() {
    console.log("Hahahahaha :)")
}


tellAJoke()

const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }

person.speak("cheese toast")

//exercise 1
console.log("exercise 1:")
const calcAge = function(currYear,birthYear){
    return currYear - birthYear
}
const age = calcAge(2017, 1989)
console.log(age)

//exercise 2
console.log("exercise 2:")
const calcAge2 = function(currYear,birthYear){
    let age = calcAge(currYear,birthYear)
    console.log("You are either " + (age-1) + " or " + age)
}
calcAge2(2017,1989)

//exercise 3
console.log("Exercise 3:")
const isEven = function(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
console.log(isEven(100))
console.log(isEven(99))

//exercise 4
console.log("exercise 4:")
function oddNums(nums){
    for(let num of nums){
        if(!isEven(num)){
            console.log(num)
        }
    }
}
const nums = [1,2,3,4,5]
oddNums(nums)


//exercise 5
console.log("exercise 5:")
function checkExists(numsArr,num){
    for(let cand of numsArr){
        if(cand == num){
            return true
        }
    }
    return false
}
console.log(checkExists(nums,3))
console.log(checkExists(nums,6))

//exercise 6
console.log("exercise 6:")
const calculator = {add: function(num1,num2){
    return num1+num2
},
subtract: function(num1,num2){
    return num1 - num2
}}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2))

//exercise 7
console.log("exercise 7:")
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength(money,name){
    return 100*(name.length - 1) + money
}

function makeRegal(name){
    return "His Royal Highness, " + name
}


//Extention - Splice Challenge
console.log("Extention")
/*const splice = function(Arr,){
    // write your code here  
}*/

arr = [1,2,3]
arr.splice(arr,0,0,-1,0,1); 
console.log(arr);