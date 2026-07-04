class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [...nums]
        nums.forEach((value, idx) => {
            const filtered = nums.filter((_,currentIdx) => {
                return currentIdx !== idx
        })
            const total = filtered.reduce((total, num) => total * num, 1 )
            arr[idx] = total
        })
        return arr
    }
}
