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
