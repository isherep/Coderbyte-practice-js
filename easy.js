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
    if (x == 1) {
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