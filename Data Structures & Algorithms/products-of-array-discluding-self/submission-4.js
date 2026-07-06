class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const arr = new Array(n)
        for (let i = 0; i< nums.length; i++) {
            let k = 1
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {  
                    k *= nums[j]                     
                }
            }
            arr[i] = k
        }  
        return arr;      
    }
}
