class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(Array.from(nums.entries(), ([ i, val]) => [val, i]));

        for (let i = 0; i < nums.length; i++) {
            const required = target - nums[i];
            if (map.has(required) && i != map.get(required)) return [i,map.get(required)]
        }
        return []
    }
}
