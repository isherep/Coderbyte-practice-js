// I am given the level by level traversal
// first - top node
// second level
// then third level
// then fourch level
// missing nodes - #
//  ["5",  - "2", "6",  -  "1", "9", "#", "8", - "#", "#", "#", "#", "4", "#"]
// first element in the array wil be 5, than chuck of 2, than chunk of 4,
// then chunk of 8, than chunk of 16. So for every level - double the elements
// so first I can build the tree and than traverse
// than I can start with fist element of every section - it will be left one, if its null - go to the 
// previous section and see there
function PreorderTraversal(strArr) {

    // build the BT
    let inorArray = []
    for (var i = 0; i < strArr.length; i++) {
        inorArray.push(0);
    }
    console.log(inorArray)
    var rootIdx = Math.floor(strArr.length / 2)
    console.log("Root idx ", rootIdx)

    // start pushing the left  into mid of array
    console.log("str[0] ", strArr[0])
    inorArray[0] = strArr[0];

    // [ 0,   0, 0, 0, 0, 0, '5', 0, 0, 0, 0, 0, 0]
    // result  
    // current [["5",]   ["2", "6"],    [ "1", "9", "#", "8"[6]],   ["#", "#", "#", "#", "4", "#"[12]] ,     "#", "#", "#", "#", "4", "#", "#", "#", "#", "#", "4", "#", ]
    //         [ 0       1.   2.           3    4.   5.   6          7.   8.    9.   10.  11]
    // 5 2 1 # # 9  # # 6 # 8 4 #
    //preorder - root, left, right ( 2k-1, 2k)

    //0, 1, 3, 7, 8, 4, 9, 10,    2, 5, 6, 11 ,12 

    /**
     *    ["5",]   
     *.   ["2", "6"],  
     *    [ "1", "9", "#", "8"[6]],   
     *    ["#", "#", "#", "#", "4", "#"[12]] ,    
     *    ["#", "#", "#", "#", "4", "#", "#", "#", "#", "#", "4", "#" ]
     */

    /**
*    ["5",]   
*.   ["2", "6"],  
*    ["1", "9", "#", "8"[6]],   
*    ["#", "#", "#", "#", "4", "#"[12]] ,    
*/

    // [5, 2,1, ##, 9, ##,  6, #, 8, 4, #


    // spit into layers

    console.log(inorArray)
    // code goes here  
    return inorArray;

}



// keep this function call here 
console.log(PreorderTraversal(readline()));