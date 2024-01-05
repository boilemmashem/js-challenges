const isPalindrome = (num): boolean => {
    // palindromes are the same backwards as forwards
	const reversedStr = String(num)
        .split("")
        .reverse()
        .join('');

	return Number(reversedStr) === num;
};

// range of numbers to check
// largest number is 999
// smallest number is 111

const bruteCheck = () => {
    const max = 999
    const min = 111
    let largest = 0

    for(let x = max; x >= min; x--) {
        for(let y = max; y >= min; y--) {
            if(isPalindrome(x * y) && x * y > largest){
                largest = x * y
            }
        }
    }

    return largest

}

console.log(bruteCheck())