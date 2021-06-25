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
   
      
   
   
 }
}
encryptThis("hello world")