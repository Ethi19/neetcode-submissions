class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set = {}
        for (const s of strs) {
            const sorted = s.split('').sort().join()
            if (!set[sorted]) {
                set[sorted] = []
            }
            set[sorted].push(s);
        }
        return Object.values(set) 
    }
}
