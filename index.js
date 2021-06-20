// code of a prime number

const isPrime = (a) =>{
    const a1 = parseInt(a);
    let a2  = true;
    
    if(a1 === 1){
        console.log("1 is neither prime nor composite")
    }
    else if (a1 > 1){
        for(let i =2; i< a1; i++){
            if(a1 % i == 0){
                a2 = false;
                break;
            }  
        } if(a2){
            console.log(`${a} is prime`)
        }else{
            console.log(`${a} is not a prime number`)
        }
    }
}
isPrime(17)

// code of a prime number

// program to print prime numbers between the two numbers

const primeInBetween = (b, b1) =>{
    const b2 = parseInt(b);
    const b3 = parseInt(b1);

    for(let i=b2; i<=b3; i++){
      let b4 = 0;

      for(let j = 2; j<i; j++){
          if(i%j == 0){
              b4=1;
             
              break;
            
          }
      }

      if(i > 1 && b4 == 0){
        console.log(i)
    }
    }
     
    

}
primeInBetween(2,17)
 
// program to print prime numbers between the two numbers
// print the first “n” prime numbers

const firstPrimeNumber = (n) =>{
    var primes=[2];
    for (var i=2;primes.length<n;i++){
        var prime=true;
        var rootI=Math.sqrt(i)+1;
        for (var j=2;j<rootI;j++){
            if (i%j==0) {prime=false;break;}
        };
        if (prime) primes.push(i);
    };
    console.log(primes)
}
firstPrimeNumber(8)

// print the first “n” prime numbers

// program to generate fibonacci series up to n terms
  
const fibonacciTon = (c) =>{
    const c1 = parseInt(c);
    let c2 =0, c3=1, c4;

    for(let i=1; i<=c1; i++){
        console.log(c2);
        c4= c2+c3;
        c2=c3;
        c3=c4;
    }
}
fibonacciTon(4)

// program to generate fibonacci series up to n terms



// program to check whether the last digit of three numbers is same 
  
const checkLastDigitSame = (d,d1,d2) => {
        // find the last digit
        const resultD = d%10;
        const resultD1 = d1%10;
        const resultD2 = d2%10;

        if(resultD == resultD1 && resultD == resultD2) {
            console.log("same last digit")
        }else{
            console.log("not same")
        }
        
}
checkLastDigitSame(8,38,4)


// program to check whether the last digit of three numbers is same 

// program to find the HCF or GCD of two integers
  
const highestCommonFactor = (e, e1) =>{
    let hcf;
    for(let i = 1; i <= e && i <= e1; i++){
        if(e%i == 0 && e1%i == 0){
            hcf = i;
        }
    }

    return console.log(hcf)
}

highestCommonFactor(60,72)
// program to find the HCF or GCD of two integers

// program to check if the string is palindrome or not
const checkPalindrome = (str) =>{
    const f = str.split('').reverse().join('');
    if(f == str){
        console.log(`${str} is palindrome`)
    }else{
        console.log("not palindrome")
    }
}

checkPalindrome("Karan")
// program to check if the string is palindrome or not

// program to sort words in alphabetical order

   const alphabeticalOrder = (gStr) =>{
       const g = gStr.split(' ');
       g.sort();

       for(const element of g){
           console.log(element)
       }
   }

   alphabeticalOrder("I am learning JavaScript")

// program to sort words in alphabetical order

//For building the encrypted string:
//Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
//Do this n times!

//example:-  "This is a test!", 1 -> "hsi  etTi sats!"
//"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"


const encrypt = (s, f) => {
    if (!s) return s;
    const l = s.length;
    for (let i = 0; i < f; i++) {
      let x = '', y = '';
      for (let j = 0; j < l; j++) {
        if (j % 2) x += s[j];
        else y += s[j];
      }
      s = x + y;
    }
    return s;
  }
  
  const decrypt = (s, f) => {
    if (!s) return s;
    const l = Math.floor(s.length / 2);
    for (let i = 0; i < f; i++) {
      let x = s.slice(0, l), y = s.slice(l);
      s = '';
      for (let j = 0; j < l + 1; j++) 
        s += (y[j] ? y[j] : '') + (x[j] ? x[j] : '');
    }
    return s;
  }

//For building the encrypted string:
//Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
//Do this n times!

//async await

console.log('person:1');
console.log('person:2');
const promiseWifeWillBring = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('person');
    },3000)
});

promiseWifeWillBring.then((t) =>{
    console.log(`${t}:3`)
});
console.log('Person:4');
console.log('person:5');

async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();
