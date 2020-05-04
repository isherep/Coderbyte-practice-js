var isAnagram = function (s, t) {

    console.log("Hello world");

    if (s.length != t.length) {
        return false;
    }
    let counts = [];
    // find the array place that is equal to the charcode of i
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        // if counts[i] exists - than ++, else - 0++
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }

    console.log(counts);
    return true;
};

var isAnagramMap = function (s, t) {
    if (s == "" && t == "") return true
    if (s.length != t.length) {
        return false;
    }

    let hashMap = {};

    for (let i of s) {
        if (hashMap[i]) {
            hashMap[i]++;
        } else {
            hashMap[i] = 1;
        }
    }

    for (let char of t) {
        if (!hashMap[char]) return false
        else if (hashMap[char] = 0) return false
        else hashMap[char]--
    }
    return true

}

console.log(isAnagram("a", "b"));
console.log(isAnagramMap("anagram", "nagaram"));