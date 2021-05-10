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
isPrime(4)

// code of a prime number