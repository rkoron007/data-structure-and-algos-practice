// [7, 1, 1, 4]

function quickSort(array) {
    if (array.length <= 1 ) return array;

    let pivot = array.shift();

    let larger = array.filter((num) => num > pivot);  // [4]
    let smaller = array.filter((num) => num <= pivot); // [7]

    let left = quickSort(smaller); //  // [4]
    let right = quickSort(larger); // [1, 1] // [7]

    return left.concat([pivot]).concat(right);
}

console.log(quickSort([7,1,1,4]))


module.exports = {
    quickSort
};