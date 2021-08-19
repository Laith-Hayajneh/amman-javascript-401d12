/*
* O(1) - time
* O(1) - space
*/
let arr = [5, 6, 6, 22, 4, 3, 2, 1, 0];
const getItemByIndex = (idx) => {
    return arr[idx];
}
console.log(getItemByIndex(3));
// This loop runs a known number of times, so it's O(1)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*
* O(n) - time
* this loop will run 'n' times, based on the number of items in the array
* O(1) - space
*/
function loopThroughArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }
}

loopThroughArray(arr);

/*
* O(n^2) - time
* Here we go through the same array in nested loops for each element
* O(1) - space
*/

function nestedLoopThroughArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(i, j);
        }
    }
}

/*
* O(n^3) - time
* Here we go through the same array in nested loops for each element
* O(1) - space
*/
function nestedLoopThroughArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let x = 0; x < arr[j].length; x++) {
                console.log(i, j, x);
            }
        }
    }
}

arr.map(x => x);// O(n)
arr.map(x => arr.map(y => y));// O(n^2)

/**
 * O(log(n))
 * A binary search, which continually cuts the array in half as it goes has a log(n)
 * complexity as it whittles down the iterations.
 */
let binarySearch = (arr, value) => {
    let iterations = 0;
    let start = 0;
    let end = arr.length - 1;
    let middle = 0;

    while (start <= end) {
        iterations++;
        middle = Math.floor((start + end) / 2);

        if (value === arr[middle]) {
            return [true, iterations];
        } else if (value > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return [false, iterations];
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
