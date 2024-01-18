// Rotate the String k Times in the Left Direction
// Tick it along k times like a tickertape
// https://hackernoon.com/top-three-coding-challenges-for-mid-level-javascript-developers

let string = "javascript"
let n = 2
// Expected output = vascriptja

const stringRotate = (input :string, ticks: number) => {
    const startText = input.split('').splice(0, ticks)
    const endText = input.split('').splice(ticks, input.length)
    
    return `${endText.join('')}${startText.join('')}`
}

console.log(
    stringRotate(string, n)
)