export const myFunc = (limit = 4000000) : number => {
    let fibArr : number[] = [1, 2]
    let nextNum : number = 0
    let sumArr : number[] = [2]
    while (nextNum < limit) {
        nextNum = fibArr.slice(-2).reduce((a, b) => a + b)
        fibArr.push(nextNum)
        nextNum % 2 === 0 ? sumArr.push(nextNum) : null
    }

    return sumArr.reduce((a, b) => a + b)
}

console.log(myFunc())