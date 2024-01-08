const nthPrime = (n = 10001) => {
    let count = 1
    let primeCount = 1
    while(primeCount < n) {
        // If you can divide the number by n-i then it's not a prime
        for(let i = count - 1; i > 1; i--) {
            if(count % i === 0) {
                break
            }
            if(i === 2 && count % i !== 0) {
                primeCount++
            }
        }
        count++
    }

    return count - 1
}

console.log(nthPrime())