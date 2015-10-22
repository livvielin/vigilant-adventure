/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var tArray = t.split('');
    for (var i = 0; i < s.length; i++) {
        var index = tArray.indexOf(s[i]);
        if (index === -1) {
            return false;
        }
        tArray.splice(index, 1);
    }
    return tArray.length === 0;
};
