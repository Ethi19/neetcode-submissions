class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
             map.set(num, map.get(num) + 1 || 1 )
        }
        const arr = [...map].sort((a, b) =>b[1] - a[1] )
        console.log(arr)
        return arr.slice(0,k).map(([key,value])=> key)
    }
    
}