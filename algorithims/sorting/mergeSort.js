function mergeSort(arr) {
    // breaking condition. when only one value or arr in args is empty
    if (arr.length <= 1) { return arr }
    // divide and conquer
    // define middle and each side
    const middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)
    // recursive calls to mergeSort with left and right
    mergeSort(left)
    mergeSort(right)
    // return the returned array from merge
    return merge(arr, left, right)
}

function merge(arr, left, right) {
    // define starting indexes for both sides and the returning array
    let returnArrIndex = 0
    let leftIndex = 0
    let rightIndex = 0
    // while both left and right indexes are less than length, compare them for lesser values
    while (leftIndex < left.length && rightIndex < right.length) {
        // when value in left is smaller than right, add value to returning arrays index
        if (left[leftIndex] < right[rightIndex]) {
            // increment leftIndex and returning array index
            arr[returnArrIndex++] = left[leftIndex++]
        }
        // else add value from the right to the returning arrays index
        else {
            arr[returnArrIndex++] = right[rightIndex++]
        }
    }
    // now one or both sides are empty
    // if left still has values, add the remaining to returning arrays index
    for (let i = leftIndex; i < left.length; i++) {
        // copy over remaining left values and increment return array index
        arr[returnArrIndex++] = left[i]
    }
    // same for right
    for (let i = rightIndex; i < right.length; i++) {
        arr[returnArrIndex++] = right[i]
    }
    // return the array
    return arr
}

console.log(mergeSort([5,4,19,2,10,11,7]))

function mergeSort(arr) {
    // breaking condition
    if (arr.length <= 1) { return arr }
    const middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)
    mergeSort(left)
    mergeSort(right)
    return merge(arr, left, right)
}

function merge(arr, left, right) {
    let returnArrIndex = 0
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr[returnArrIndex++] = left[leftIndex++]
        }
        else {
            arr[returnArrIndex++] = right[rightIndex++]
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        arr[returnArrIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++) {
        arr[returnArrIndex++] = right[i]
    }
    return arr
}

console.log(mergeSort([5,4,19,2,10,11,7]))