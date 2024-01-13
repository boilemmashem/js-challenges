const sumSquareDiff = (n = 100) => {
    let sumOfSquares = 0
    let squareOfSum = 0

    for(let i = 1; i <= n; i++) {
        sumOfSquares += i * i
    }

    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum += i
    }
    squareOfSum = sum ** 2

    return squareOfSum-sumOfSquares
}

console.log(
    sumSquareDiff()
)