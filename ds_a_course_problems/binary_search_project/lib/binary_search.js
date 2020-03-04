// Given a sorted array of numbers and a target num, return a boolean indicating
// whether or not that target is contained in the array.

function binarySearch(array, target) {
    if (array.length === 0) return false;

    let middleIdx = Math.floor(array.length / 2);

    let left = array.slice(0, middleIdx);
    let right = array.slice(middleIdx + 1, array.length);

    if (target < array[middleIdx]) {
        return binarySearch(left, target)
    } else if (target > array[middleIdx]) {
        return binarySearch(right, target);
    } else {
        return true;
    }
}

// Given a sorted array of numbers and a target num, return the index of the number
// whether or not that target is contained in the array.

// 1, 2, 5, 7 target: 7
function binarySearchIndex(array, target, low=0, high=array.length) {
    if (low === high) return -1;

    let middleIdx = Math.floor((low + high) / 2);


    if (array[middleIdx] > target){ // 
        return binarySearchIndex(array, target, low, middleIdx);
    } else if (array[middleIdx] < target) { // 7
        return binarySearchIndex(array, target, middleIdx + 1, high);
    } else {
        return middleIdx; // 0
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};