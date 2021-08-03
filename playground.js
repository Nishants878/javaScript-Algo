//The marketing team is spending way too much time typing in hashtags.


function generateHashtag (str) {
    if(!str || /^\s*$/.test(str)){
           return console.log(false)
    }
    else{
        let strArr = str.split(" ");
        let removeEmpty = strArr.filter((a) => {
            return a !== ""
        })

        let capitalizeFirst = removeEmpty.map((q) =>{
          return q.charAt(0).toUpperCase() + q.slice(1)
        });
          
        let checkingLength = capitalizeFirst.join("");

        if(checkingLength.length < 140){
            return console.log("#"+checkingLength)
        }else{
            return console.log(false)
        }

       
          
    
    }
};

//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

function encryptThis (text){
    if(!text || /^\s*$/.test(text)){
        return console.log(false)
 }else{
   
      let splittingFirst = text.split(' ');
     
  
  
    
      let interChangingLastAndFirst = splittingFirst.map((x) =>{
          let newSplit = x.split("");
          let tempA = newSplit[1];
          let tempB = newSplit[newSplit.length-1]
          newSplit[newSplit.length-1] = tempA;
          newSplit[1] = tempB
         return newSplit.join("")
         
      });

     let finalValue =  interChangingLastAndFirst.map((x) =>{
         return x.charCodeAt(0) + x.slice(1)
     });

     return console.log(finalValue.join(" "))
   
 }
}


//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// => returns "(123) 456-7890"


function createPhoneNumber(numbers){
     if(numbers.length !== 10){
         return console.log(false)
     }
     else{
         let filteringFirstThree =`(${numbers.splice(0, 3).join("")})`

        let lastSevenDigit = numbers.splice(0,7)
         
         let insertingDash = lastSevenDigit.splice(3,0,"-")

         let insertingBlankSpace = lastSevenDigit.splice(0,0," ");
      
         return console.log(`"${filteringFirstThree}${lastSevenDigit.join("")}"`)

     }
}


//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    if(!string || /^\s*$/.test(string)){
        return string
    }
    else{
        let stringParsed = string.split("");
      let findingUpperCase = stringParsed.find(item =>{
          return item == item.toUpperCase()
      });
      
    let indexFinder = stringParsed.indexOf(findingUpperCase) ;
     
    let splicingFirstCase = stringParsed.splice(0,indexFinder," ");
      
    let finalArray = (`${splicingFirstCase.join("")}${stringParsed.join("")}`);

    return console.log(finalArray)

    }
}


// for removing string :- JavaScript String Reference

var str = 'Geeks for Geeks'.split("for");






 //Write a C program to compute the sum of the two given integer values. If the two values are the same, then return triple their sum.

 function addNumber (n1, n2) {
    if(n1 !== n2){
        return console.log(n1 + n2)
    }else{
        return console.log(n1+n2 *3)
    }
}



// Write a C program to get the absolute difference between n and 51. If n is greater than 51 return triple the absolute difference


function absoluteDifference (n) {
    const a = 51
    if(n>=a){
           return console.log((n-a)*3)
    }else{
        return console.log(a-n)
    }
}


//Write a C program to check two given integers, and return true if one of them is 30 or if their sum is 30.

const checkSumThirty = (n,e) =>{
       if((n===30 || e === 30) || (n+e === 30)){
            return console.log(true)
       }else{
           console.log(false)
       }
}

//Write a C program to check whether a given positive number is a multiple of 3 or a multiple of 7

const checkMultiple = (n) =>{
     if((n%3 == 0) || (n%7 == 0)){
         return console.log(true)
     }
     else{
         console.log(false)
     }
} 

// sum of an array

const sumArray = (arr) =>{
    return console.log(arr.reduce((a,b)=> a+b, 0))
};


const flattened = (arr) =>{
    return console.log(arr.reduce((accumulator,currentValue)=> accumulator.concat(currentValue),[]))
}

//Group objects by a property

let people = [
    { name: 'Matt', age: 25 },
    { name: 'Asma', age: 23 },
    { name: 'Cami', age: 29 }
  ];

  let extractingAge = people.map(item => item.age)


  //check Prime

  const isPrime = (n) =>{
      if(n<2) return console.log(false)

      for(let k =2; k< n; k++ ){
          if(n % k === 0){
              return console.log(false)
          }
      }

      return console.log(true)
  }

 //fibanoci

 const fib = (n) =>{
     let a = 0;
     let b = 1;
   let  nextTerm;

     for(let i =1; i<=n; i++){
         console.log(a);
         nextTerm = a+b;
         a = b;
         b = nextTerm
     }

 }
// remove duplicates
const duplicates = (arr) =>{
  // return console.log([...new Set(arr)])  or
  let filter = arr.filter((item, index) => arr.indexOf(item) === index);

  return console.log(filter.join(''))
}

// duplicates(['🐑', 1, 2, '🐑', '🐑', 3])

//reverse a string

const reversing = (str) =>{
   let splitter = str.split("").reverse().join("");
   return console.log(splitter)
}

// sorting in descending order

const sortingArray = (arr) =>{
    return console.log(arr.sort((a,b) => b-a))
};


//check a num is prime or not
const checkPrime = num => {
   
if(num == 1) return false;

else if(num ==2) return true;

else {
    for(let i =2; i<num; i++){
        if(num%i == 0) return false
        else return true
    }
}
    
};

// Write a JavaScript program to display the current day and time in the following format.

const currentTime = () =>{
    let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let date = new Date();
    let today = date.getDay();

    console.log(`Today is: ${dayList[today]}`)

}

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function cloner (a){
   
}