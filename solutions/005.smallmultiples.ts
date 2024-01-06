// Start counting from 1
// Have an inner count that checks to see if it is divisible by 1 through 20
// If divisible is true all the way to number 2 then we have an answer

// Starting at 20 is more likely to find answer faster so start at top and count down

const smallMultiples = (n = 20) => {
    let counter = 1
    while(true) {
        for(let i = n; i > 1; i--) {
            if(counter % i !== 0) {
                break
            }
            if(i === 2) {
                return `${counter}`
            }
        }
        counter++
        if(counter === 1000000000) {
            return 'timed out'
        }
    }
}

console.log(smallMultiples())