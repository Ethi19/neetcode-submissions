class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0 ) return 'emty'
        const str = strs.join('\x1F')
        console.log(str);
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 'emty') return []
        return str.split('\x1F')
    }
}
