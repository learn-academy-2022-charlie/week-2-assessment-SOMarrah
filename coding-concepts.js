// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: an array: ["B", "r", "a", "v", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: I was correct. .split() is a method that turns a string into an array, and depending on the argument passed into the split method determines the output.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: correct, every function needs a return. I was thinking it would say Hello, LEARN Student but then I read it over again and noticed return was missing. The return tells the computer what the output is going to be


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8,10,12,14,8]
// b) Verify and explain: correct, the variable has the .map() static or hard coded to accept that array with those specific numbers. We have only been practicing dynamic code to be more versatile.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [12, 14]
// b) Verify and explain: incorrect, i thought filter would take out the odd numbers returning the even, but I thought of it backwords. If value modulo 2 does not equal 0 return value is how I should read it?


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:JavaScript
// b) Verify and explain: correct, parsing the key languages at index of 0 will return the first element in that index which was JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:undefined || George Bravo 2022
// b) Verify and explain: Kind of correct, I thought undefined because I was thinking name was a protected word. I am not sure when it can and can not be used. 
