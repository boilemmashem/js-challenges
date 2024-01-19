// https://leetcode.com/problems/climbing-stairs/description/?envType=daily-question&envId=2024-01-18
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
//     1 <= n <= 45

//
// 💡 Thoughts (trying to find pattern)
// n = 1, answer: 1
// n = 2, answer: 2
// n = 3, answer: 3
// n = 4
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 1, 2
// 2, 2
// n = 4, answer 5
// n = 5
// 1, 1, 1, 1, 1
// 2, 1, 1, 1
// 1, 2, 1, 1
// 1, 1, 2, 1
// 1, 1, 1, 2
// 2, 2, 1
// 2, 1, 2
// 1, 2, 2
// n = 8

// answerN = answer[N-1] + answer[N-2]
// fibbonacci series!! 🚀


const climbStairs = (n: number): number => {
	if (n > 45 || n < 1) {
		throw new Error("parameter n must be > 0 and < 45");
	}
    let fibbonacciSeries = [1, 2]
    if (n === 1) { return fibbonacciSeries[0] }
    if (n === 2) { return fibbonacciSeries[1] }
    for(let i = 3; i <= n; i++) {
        fibbonacciSeries.push(fibbonacciSeries[i-2] + fibbonacciSeries[i-3])
    }

    return fibbonacciSeries[fibbonacciSeries.length - 1]
};

console.log(climbStairs(2))
