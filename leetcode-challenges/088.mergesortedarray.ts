// https://leetcode.com/problems/merge-sorted-array
// Challenge for this one comes from the need to mutate the parameter

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums2.splice(n, nums2.length)
    nums1.splice(m, nums1.length, ...nums2)
    nums1.sort((a, b) => a - b)
};

// Answer = [1, 2, 2, 3, 5, 6]

merge(nums1, m, nums2, n)
console.log(
    nums1
)
