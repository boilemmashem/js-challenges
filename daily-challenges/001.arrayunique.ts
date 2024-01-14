// Extract the unique values from an array
const animalsArray = ['cat', 'dog', 'dog', 'cat', 'mouse', 'cat', 'hamster', 'cat', 'dog', 'cat', 'dog', 'dog', 'cat', 'mouse', 'cat', 'hamster', 'cat', 'dog', 'mouse', 'rabbit', 'budgie', 'dog', 'rat', 'dog', 'hamster', 'rat', 'budgie', 'dog', 'rabbit', 'dog', 'rabbit', 'cat', 'dog', 'mouse', 'budgie', 'dog', 'rabbit', 'rat', 'dog', 'hamster', 'rabbit', 'rat', 'budgie', 'dog', 'dog', 'rabbit', 'goldfish', 'dog', 'goldfish'];

// JS sets can only contain unique values
const uniqueValues = new Set([...animalsArray])

console.log(uniqueValues)