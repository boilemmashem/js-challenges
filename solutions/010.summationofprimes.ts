// Find sum of all primes *BELOW* two million
// Sum of primes *BELOW* 10 is 17
// This code takes a while to run 🐌


const isPrime = (num) => {
    if(num === 1) { return false }
    if(num  === 2  || num === 3) { return true }
    for(let i = 2; i <= Math.ceil(num / 2); i++) {
        if(num % i === 0) {
            // if we can divide it's not a prime
            return false
        }
    }
    // If we escape the check it must be a prime
    return true
}

const summationOfPrimes = (limit) => {
    // Go through each number and check if it's a prime
    let primes: number[] = []
    for(let i = 1; i < limit; i++) {
        console.log(`checking: ${i}`)
        if(isPrime(i))  {
            primes.push(i)
        }
    }

    // Add up the primes and spit 'em out
    return primes.reduce((a, b) => a+b)
}

console.log(summationOfPrimes(2000000))