class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var sort = nums.sort()
        for (let i = 0; i < sort.length; i++){
            if (sort[i] === sort [i+1]){
                return true
            }
        }
        return false

    }
}
