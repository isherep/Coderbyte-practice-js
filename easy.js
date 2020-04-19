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

