export const myFunc = (num = 1000) => {
    // Validate input
    if (num < 0 || !Number.isInteger(num)) {
        return `invalid input`
    }

    let total = 0
    for(let i = 0; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            total += i
        }
    }

    console.log(total)
    return total
}

myFunc()