export const myFunc = (num: number = 1000): number => {
    // Validate input
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error('invalid argument')
    }

    let total = 0
    for(let i = 0; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            total += i
        }
    }

    return total
}

console.log(myFunc())