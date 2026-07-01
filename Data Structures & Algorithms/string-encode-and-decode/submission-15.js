class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i = 0
        while ( i < str.length) {
            let j = i 
            while ( str[j] !== '#') {
                j++;
            }
            const count = Number(str.substring(i,j));
            j++
            const data = str.slice(j, count + j)
            arr.push(data);
            i = count + j
        }
        return arr
    }
}
