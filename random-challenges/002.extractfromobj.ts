// Extract the values of a given Property From an Array of Objects
// https://hackernoon.com/top-three-coding-challenges-for-mid-level-javascript-developers

let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
  ];


const getNames = (arr: {name: string}[]) :string[] => {
    return arr.map((obj) => obj.name)
}

const getProperty = (arr: object[], prop: string) => {
    return arr.map((obj) => obj[prop])
}

console.log(getNames(input))
console.log(getProperty(input, "name"))