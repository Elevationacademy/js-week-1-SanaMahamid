

/*let frontEnd = ['HTML', 'CSS', 'Javascript'];
//debugger;
let frontEndLangages = frontEnd;*/

/*let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let company of companies){
    console.log( "One day I will work at " + company)
}*/

//exercise 1
console.log("exercise 1:")
let names = ['Ameen', 'Sana', 'Mohammed']
let ages = [30, 26, 4]
for(let i=0; i<names.length; i++){
    console.log(names[i] + " is " + ages[i] + " years old")
}

//exercise 2
console.log("exercise 2:")
const numbers = [13,6,94,10,90,11,4,21]
let sum = 0
for(let number of numbers){
    sum += number
}
console.log(sum)

//exercise 3
console.log("exercise 3:")
console.log(sum/numbers.length)


//exercise 4
console.log("exercise 4:")
let nums = []
for(let i=1; i<=100; i++){
    nums.push(i)
}
console.log(nums)

//exercise 5
console.log("exercise 5:")
for(let num of nums){
    if(num % 2 == 1){
        console.log(num)
    }
}


//exercise 6
console.log("exercise 6:")
nums = [773, 414, 213, 374, 434, 700, 506, 
    495, 852, 585, 271, 198, 689, 248, 708, 197,
     96, 260, 921, 834, 258, 662, 501, 632, 715, 
     503, 538, 289, 596, 381, 817, 280, 968, 877,
      431, 146, 491, 724, 83, 841, 174, 21, 460, 25,
       785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 
       84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271,
        373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 
        324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 
        846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

let index

for(let i in nums){
    if(nums[i] == 709){
        index = i
    }
}
console.log(index)

//exercise 7
console.log("exercise 7:")
names = ["Ashley", "Donovan", "Lucas"]
ages = [23, 47, 18]
const people = []
for(let i=0; i<3; i++){
    people.push({name: names[i],age: ages[i]})
}
console.log(people)

//exercise 8
console.log("exercise 8:")
for(let member of people){
    console.log(member.name + " is " + member.age + " years old")
}

//exercise 9
console.log("exercise 9:")
let posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
let i
for(let postIndex in posts){
    if(posts[postIndex].id == 2){
        i = postIndex
    }
}
posts.splice(i,1)
console.log(posts)

//exercise 10
console.log("exercise 10:")
posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for(let post of posts){
      if(post.id == 2){
          for(let i in post.comments){
              if(post.comments[i].id == 3){
                  index = i 
              }
          }
          post.comments.splice(index,1)
      }
  }
  console.log(posts)

  //Extention
  console.log("Extention:")
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  let letters = Object.keys(dictionary)
  let dic
  console.log(letters) 
  for(let l=0; l<letters.length; l++){
      console.log("Words that begin with " + letters[l] + ":" )
      dic = dictionary[letters[l]]
      for(let word of dic){
          console.log(word)
      }
  }

