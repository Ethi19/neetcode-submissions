class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for (let i = 0; i< nums.length; i++) {
            let k = 1
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {  
                    k *= nums[j]                     
                }
            }
            arr.push(k)
        }  
        return arr;      
    }
}
