
// [4, 3, 5]
function countingSort(arr, max) {
    let result = [];
    let countArr = new Array(max + 1).fill(0); // [0,0,0,0,0]

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] += 1; //[0,0,1,1,1]
    }

    for (let j = 0; j < countArr.length; j++) {
        while (countArr[j] > 0) { //[0,0,0,0,0]
            result.push(j); // [3,4,5]
            countArr[j]--; 
        }
    }

    return result;
}

console.log(countingSort([1], 1));

module.exports = {
    countingSort
};