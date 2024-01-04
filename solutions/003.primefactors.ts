// Get the largest prime factor of a number
// Divide by two until no longer possible
// then divide by 3 until no longer possible
// then divide by 4 until no longer possible
// keep going until the number is 1
// The last divider is the biggest prime

export const myFunc = (num = 600851475143) => {

    let divider = 2

    while(num > 1) {
        if(num % divider === 0) {
            num = num / divider
        } else {
            divider++
        }
    }

    return divider
}

console.log(myFunc())
