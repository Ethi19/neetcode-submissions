class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set = {}
        for (const s of strs) {
            let count = new Array(26).fill(0);
            for (let i = 0; i < s.length; i ++) {
                count[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1 
            }
            if (!set[count]) {
                set[count] = []
            }
            set[count].push(s)
        }
        return Object.values(set) 
    }
}
