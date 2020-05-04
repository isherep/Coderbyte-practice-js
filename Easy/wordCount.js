function LongestWord(sen) {

    // code goes here 
    // create object that counts how many counts each word has
    // split the string to words and put counts in the object
    // find the larges value and return it's key
    // cleanup words using Regex

    let wordCounts = {}

    // sen = sen.replace(/[^d]/g, ' ');
    // console.log(sen)
    let words = sen.match(/\w+/g);

    //console.log(words)

    var maxWord = words[0];

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxWord.length) {
            maxWord = words[i];
        }
    }

    return maxWord;

}

  // keep this function call here 