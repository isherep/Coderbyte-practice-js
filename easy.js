/*
QUESTION:
Have the function AlphabetSoup(str) take the str string parameter being passed and
return the string with the letters in alphabetical order (ie. hello becomes ehllo).
Assume numbers and punctuation symbols will not be included in the string.
*/

// null == undefined is trye
function AlphabetSoup(str) {
    if (!str) {
        console.log("The string is null or undefined")
    }
    // split, sort join
    if (str)
        return str.split("").sort().join("");
}

console.log("Result ", AlphabetSoup("null"));

/*
QUESTION:
Have the function CheckNums(num1,num2) take both parameters being passed 
and return the string true if num2 is greater than num1, 
otherwise return the string false. 

If the parameter values are equal to each other then return the string -1.
*/
// both numeric and string types
function CheckNums(num1, num2) {
    if (!num1 || !num2) {
        console.log("Number 1 or 2 is empty");
    }
    return num2 > num1 ? true : false
    //return result; 
}
console.log(CheckNums(3, 6));
console.log(CheckNums(0.003, 99));
console.log(CheckNums(9, 6));
// testing numbers represented as strings
console.log(CheckNums("2", "1"));
console.log(CheckNums("1", "2"));


/* QUESTION:
Have the function CorrectPath(str) read the str parameter being passed, which will represent the movements
made in a 5x5 grid of cells starting from the top left position.
The characters in the input string will be entirely composed of: r, l, u, d, ?.
Each of the characters stand for the direction to take within the grid,
for example: r = right, l = left, u = up, d = down.
Your goal is to determine what characters the question marks should be in order for a path
to be created to go from the top left of the grid all the way to the bottom right without touching
previously travelled on cells in the grid.
For example: if str is "r?d?drdd" then your program should output the final correct string
that will allow a path to be formed from the top left of a 5x5 grid to the bottom right.
For this input, your program should therefore return the string rrdrdrdd.
There will only ever be one correct path and there will always be at least one question mark within the input string.
================================================================================
Input:"???rrurdr?"
Output:"dddrrurdrd"
Input:"drdr??rrddd?"
Output:"drdruurrdddd"
*/

// by default all the cells will be marked falsy
// 
function CorrectPath(str) {

}



/*
QUESTION:
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
*/

var FirstFactorialRecurs = (x) => {
    if (x <= 1) {
        return 1;
    }

    return x * FirstFactorialRecurs(x - 1);
}

console.log("Factorial ", "=", FirstFactorialRecurs(4));

var FirstFactorialIter = (x) => {
    let f = 1;
    for (var i = 1; i <= x; i++) {
        console.log("f", f, "x", i);
        f *= i;
    }
    return f;
}

console.log("Factorial iterative ", FirstFactorialIter(4));


/*
QUESTION:
Have the function FirstReverse(str) take the str parameter being passed 
and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then your program 
should return the string "sredoC dna dlroW olleH". 
*/

function FirstReverse(str) {
    return str.split("").reverse().join("");
}

function FirstReverseNoLib(str) {
    let newStr = "";
    for (var i = str.length() - 1; i > 0; i--) {
        newStr += str.substr(i, 1);
    }
    return newStr;
}

console.log("New String ", FirstReverse("hello"));
console.log("New String ", FirstReverse("abcdefg"));
console.log("New String ", FirstReverse("h"));

function ReversCharArr(str) {
    let chars = str.split("");
    console.log("chars ", chars);
    for (var i = 0; i < chars.length / 2; i++) {
        var temp = chars[i];
        chars[i] = chars[chars.length - i - 1];
        chars[chars.length - i - 1] = temp;
    }

    return chars.join("");
}

console.log("Array method ", ReversCharArr("hello"));



/*
QUESITON:
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space.
*/

let LetterCapitalize = (str) => {

    let wordsArr = str.split(" ");
    //console.log(wordsArr);
    for (var i = 0; i < wordsArr.length; i++) {
        var newWord = wordsArr[i].substr(0, 1).toUpperCase() + wordsArr[i].substr(1);
        wordsArr[i] = newWord;
    }
    return wordsArr.join(" ");
};

console.log(LetterCapitalize("This is my maria"));


/*
QUESTION:
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/
function LetterChanges(str) {
    // split to char array and iterate
    // if the char array [i] != (a, e, i, o, u) - replace with char(charcode +1)
    // else  - char = char.toUpperCase;
    let chars1 = [];
    //console.log(chars);
    for (var i = 0; i < str.length; i++) {
        let cur = str.charAt(i);
        if (cur === 'a' || cur === 'e' || cur === 'i' || cur === 'o' || cur === 'u') {
            chars1[i] = cur.toUpperCase();
        } else {
            // get the current code for the character
            // replace it with character that is hiher than its code by one\
            //cur = 'b'
            if (cur === 'z') {
                chars1[i] = 'a';
            } else {
                chars1[i] = String.fromCharCode(str.charCodeAt(i) + 1);// get a charcode of current element);
            }
        }
    }

    return chars1.join("");

}
console.log("\nLetter changes ");
console.log(LetterChanges("abcdefghijkz"));


/* QUESTION:
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty.
*/
LongestWord = (sen) => {
    let words = sen.split(" ");
    // find the longest word in the array
    let longestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
let sentence = "this is the longest work which should be ababagalamaga";
console.log("\n\nLongest word in the sentence is ")
console.log(LongestWord(sentence));


/*
QUESTION:
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, 
and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
If so, then your program should return the string true, otherwise it should return the string false. 
If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.
For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because 
there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.


[1-9]\?{3} - arrb|6???|4xxbl|5???|eee5

Better - numbers 0-9 - followed by the questionmark


*/

//http://design-patterns12.blogspot.com/2018/08/coderbyte-challenge-questions-marks.html
/*
The problem seems to come from Coderbyte that isn't able to parse correctly escaped characters in regex 
patterns (literals or with the RegExp constructor). So the simplest solution is to replace escaped 
sequences: \d => [0-9], and \? => [?] (as suggested by @Saud in comments).
*/
function QuestionsMarks(str) {
    var state = {
        d1: 0, d2: 0, marks: 0,
        init: function () { this.d1 = this.d2; this.marks = 0; },
        check: function () { return this.d1 + this.d2 > 9 && this.marks != 3; }
    };
    var re = /[0-9?]/g;
    var m;

    while ((m = re.exec(str)) !== null) {
        if (m[0] == '?') {
            state.marks++;
        } else {
            state.d2 = parseInt(m[0]);
            if (state.check()) return false;
            state.init();
        }
    }
    return true;
}

QuestionMarkds("acc?7??sss?3rr1??????5");

/*
QUESTION:
Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
*/


/*
QUESTION: Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
*/

/*
QUESTION:
Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
*/

/*
QUESTION:
Have the function VowelSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following:
a b c d
e i k r
o u f j
Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found. If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. The input matrix will at least be of size 2x2.
===============================================================================
Input:["aqrst", "ukaei", "ffooo"]
Output:"1-2"
Input:["gg", "ff"]
Output:"not found"
*/