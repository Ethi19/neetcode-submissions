class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let counter = 0;
        let arr
        nums.map((num) => num===0 ? counter++ : num)
        const total = nums.reduce((acc, value) => 
            value != 0 ? acc*=value: acc *= 1
        )
        
        if (counter >= 2) {
            return new Array(nums.length).fill(0)
        }
        if (counter < 1 ){
            arr = nums.map((num) => total/num)
        } 
        if (counter === 1) {
            arr = nums.map((num, i) => num!=0 ? 0 : total )
        }

        return arr;     
    }
}
