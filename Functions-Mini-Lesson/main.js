people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  
 const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }

  const getAge = function(age){
      if(age < 21){
          return "Underage"
      } else {
          if(age >= 55){
              return "55+"
          }
      }
      return age + " year old"
  }

  const getProfession = function(profession){
      let p = profession.split(" ")
      let str = ""
      for(let i=0; i<p.length; i++){
          str += capitalize(p[i]) + " "
      }
      return str
  }

  const getAdrress = function(city, country){
      return "from " + capitalize(city) + ", " + capitalize(country) + ". "
  }

  const getCatchphrasereturn = function(name,catchphrasereturn){
      return capitalize(name) + " loves to say " + "\"" + catchphrasereturn + "\"."
  }



  const getSummary = function(person){
    let summary = ""//modify the summary string with the person parameterreturn summary
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += getProfession(person.profession)
    summary += getAdrress(person.city,person.country) 
    summary += getCatchphrasereturn(person.name,person.catchphrase)
    return summary
  }

  console.log(getSummary(people_info[0]))
  //Guido is an underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!".
  console.log(getSummary(people_info[1]))
  console.log(getSummary(people_info[2]))

  //Instructions

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const removeSpecialChars = function(s,specialChars){
    s = s.toLowerCase()
    for(let c of specialChars){
        s = s.split(c).join(" ")
    }
    return s.split(" ")
}

const addToCounter = function(word){
    if(wordCounts.hasOwnProperty(word)){
        wordCounts[word]++
    } else {
    wordCounts[word] = 1
    }
}

const uniqueWords = function(story){
    let s = removeSpecialChars(story,specialChars)
    for(let word of s){
        addToCounter(word)
    }
    console.log(wordCounts)
}

uniqueWords(story)




 