// bubble sort
function bubbleSort(numsArr) {
    for (let i = 0; i < numsArr.length; i++) {
        for (let j = 0; j < numsArr.length; j++) {
            if (numsArr[j] > numsArr[j + 1]) {
                let temp = numsArr[j];
                numsArr[j] = numsArr[j + 1];
                numsArr[j + 1] = temp
            }
        }
    }
    return numsArr
}

let result = bubbleSort([7, 8, 3, 2, 5, 77, 33, 2, 0, 4]);
console.log("bublesort", result)
// selection sort
function selectionSort(numsArr) {
    for (let i = 0; i < numsArr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numsArr.length; j++) {
            if (numsArr[j] < numsArr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = numsArr[i];
        numsArr[i] = numsArr[minIndex];
        numsArr[minIndex] = temp;
    }
    return numsArr;
}
console.log(selectionSort([8, 39, 9, 33, 2, 33, 99, 3]))
// insertion sort
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1;
        let current = arr[i];
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current
    }
    return arr
}
console.log(insertionSort([7, 3, 83, 299, 2, 77, 2]))

// merge sort
function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftMerge = mergeSort(left);
    let rightMerge = mergeSort(right);
    return merge(leftMerge, rightMerge);
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    result = result.concat(left.slice(i)).concat(right.slice(j));
    return result;
}
console.log(mergeSort([8, 2, 90, 22, 78, 32, 993, 2]))

// quick sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log("quick sort", quickSort([8, 2, 92, 2, 6, 2]))