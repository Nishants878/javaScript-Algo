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
         let filteringFirstThree = numbers.splice(0, 3)

         console.log(filteringFirstThree)

     }
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])