function VowelCount(str) {

    // code goes here 
    // create object that has keys as  vowels and vals counts 
    let counts = {}
    for (var char of str) {
        char = char.toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'u' || char === 'o') {
            if (counts[char] === undefined) {
                counts[char] = 1;
            } else {
                counts[char] += 1;
            }
        }
    }

    return counts;

}
