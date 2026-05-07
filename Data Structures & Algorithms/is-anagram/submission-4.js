class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sMap = new Map();
        for (const letter of s) {
            sMap.set(letter, (sMap.get(letter)|| 0) + 1 )
        }

        for (const letter of t) {
            if (!sMap.has(letter)) return false
            sMap.set(letter, (sMap.get(letter)) - 1)

            if (sMap.get(letter) === 0) {
                sMap.delete(letter)
            }

        }
        return sMap.size === 0;
        
    }
}
