// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.



describe("dByThree", () => {
  it("takes in a number and decides if that number can be divided by three or not", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"
    const num4 = "tacos"
    expect(dByThree(num1)).toEqual("15 is divisible by 3.")
    expect(dByThree(num2)).toEqual("0 is divisible by 3.")
    expect(dByThree(num3)).toEqual("-7 is not divisible by 3.")
    expect(dByThree(num4)).toEqual("tacos is not divisible by 3.")

  })
})
//Got RED,
// FAIL  ./code-challenges.test.js
//   varTest
//     ✕ takes in a variable and returns the data inside of the variable
//
//   ● varTest › takes in a variable and returns the data inside of the variable
//
//     ReferenceError: varTest is not defined

// b) Create the function that makes the test pass.
//create a function called dByThree
//takes a number as an argument
//input-->number
//expected output--> number is/isnot divided by 3
//use an if statement with modulo to check if the number can be divided by three.
//the returns should use string interpolation to give back correct numbers to user.
//if the number is not divisible by 3 return that information
let dByThree = (number) =>{
  if(number % 3 === 0){
    return `${number} is divisible by 3.`
  }else {
    return `${number} is not divisible by 3.`
  }
}
//Got Green
// PASS  ./code-challenges.test.js
//  dByThree
//    ✓ takes in a number and decides if that number can be divided by three or not (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.



describe("capArr", () => {
  it("takes in an array and returns each word capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

    expect(capArr(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capArr(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

  })
})
//got RED
// FAIL  ./code-challenges.test.js
//   dByThree
//     ✓ takes in a number and decides if that number can be divided by three or not (2 ms)
//   capArr
//     ✕ takes in an array and returns each word capitalized
//
//   ● capArr › takes in an array and returns each word capitalized
//
//     ReferenceError: capArr is not defined

// b) Create the function that makes the test pass.
//make a function called capArr
//input -> array
//expected output-> array with the word capitalized - not all letters
//since I am dealing with arrays I know there are three methods that specifically deal with them that we have gone over. .map, .filter, and .forEach. I also know that iteration would be good too. Using something like a for loop to iterate through each array to change the letter uppercase might work.
//I think the .map or the .forEach would be best since it has built in iteration. It would be cool to check the limitations of each and compare them
//.map creates a new array -> prompt doesnt specify which it prefers.
//.forEach is a mutator that applies a function to the array itself, but doesn't return anything itself
//what else is interesting is that since the map method returns new arrays it can chain into more map methods while the forEach method only works one time inside the function.
//Since i need an array returned i think the map method would be best for this problem. .maps can take value, index, and array as parameters.
//i know there is another built in method to capitalize called .toUpperCase that will convert everything inside the element to UpperCase.
//Maybe iterate through each array and capitalize everything, then can specify toLowerCase starting at index 1?
//returning at index[0].toUpperCase only returns the first letter capitalized. Maybe there is a way to concat the rest?
// -   "Streetlamp",
//    -   "Potato",
//    -   "Teeth",
//    -   "Conclusion",
//    -   "Nephew",
//    +   "S",
//    +   "P",
//    +   "T",
//    +   "C",
//    +   "N",
// concat did work but i need to figure out how to get rid of the 0th index (in the string element) when concating or find out how to use index 1 through the end of each element
//slice returns a subset of the array starting from a point
//success
const capArr = (array) => {
  return array.map(value => {
    return value[0].toUpperCase().concat(value.slice(1).toLowerCase())
  })
}

// PASS  ./code-challenges.test.js
//   dByThree
//     ✓ takes in a number and decides if that number can be divided by three or not (1 ms)
//   capArr
//     ✓ takes in an array and returns each word capitalized
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVow", () => {
  it("takes in a string and returns the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(firstVow(vowelTester1)).toEqual(1)
    expect(firstVow(vowelTester2)).toEqual(0)
    expect(firstVow(vowelTester3)).toEqual(2)
  })
})
//Got RED
// FAIL  ./code-challenges.test.js
//  dByThree
//    ✓ takes in a number and decides if that number can be divided by three or not (2 ms)
//  capArr
//    ✓ takes in an array and returns each word capitalized (1 ms)
//  firstVow
//    ✕ takes in a string and returns the index of the first vowel
//
//  ● firstVow › takes in a string and returns the index of the first vowel
//
//    ReferenceError: firstVow is not defined


// b) Create the function that makes the test pass.
//create a function named firstVow
//input-> a string
//expected output-> first vowel inside the string returned as the index
//indexOf logs the first index of a given value
//.split() turns a string into an array;.join() will put them back together if needed
//have to iterate through the string, either using a for loop or turn the string into an array and filter out the first vowel.
//since filter has a built in conditional im thinking that route. have to log all vowels and return that instance, or log all other letters and return all vowels that are left. use .toLowerCase to make sure all letters can be read.
//.indexOf() method returns the current index

// const firstVow = (string) => {
//   return string.split("").filter(value => {
//   return value.indexOf("e")
//
// )}
//that is where I stopped and took a break. I thought I should take a look at the .indexOf method further. decided to try a forloop method since it might be simpler

const firstVow = (string) => {
  let arrStr = string.split("")
  for(i = 0; i < arrStr.length; i++){
    if(arrStr[i] == "a" || arrStr[i] == "e" || arrStr[i] == "i" || arrStr[i] == "o" || arrStr[i] == "u"){
      return i
    }
  }
}
//Got GREEN
// PASS  ./code-challenges.test.js
//   dByThree
//     ✓ takes in a number and decides if that number can be divided by three or not (3 ms)
//   capArr
//     ✓ takes in an array and returns each word capitalized (1 ms)
//   firstVow
//     ✓ takes in a string and returns the index of the first vowel
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
//this method works and I know it can be refactored but I am stuck on how to do it. Also I think if i change the order of the vowels I might get different results.
