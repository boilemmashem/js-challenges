// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// Count number of true values in primative array

const myArr = [true, true, false, false, true, false, false]

const countTrue = (arr) => {
    return arr.reduce((acc, cur) => {
        cur === true ? acc+1 : null
    })
}

console.log(countTrue(myArr))