function quickSort(arr, start = 0, end = arr.length) {
    // breaking condition
    if (start >= end) { return arr }
    // define middle with partition
    const middle = partition(arr, start, end - 1)
    console.log(middle)
    // recurrions with left and right half
    quickSort(arr, start, middle) // left side
    quickSort(arr, middle + 1, end) // right side
    // return
    return arr
}

function partition(arr, start, end) {
    // define pivot value (use last in arr) and pivot index (use start)
    const pivot = arr[end] // value used to compare index values too
    let j = start // all vals less than pivot index move to left of this
    // loop through arr comparing index and pivot
    for (let i = start; i < end; i++) {
        // if index < pivot then swap index and pivot index
        if (arr[i] <= pivot) {
            swap(arr, i, j)
            // increment pivot index
            j++
        }
    }  
    // return middle index by swapping last (pivot value) with the pivot index
    console.log(arr[end], arr[j])
    swap(arr, end, j)
    return j
}

function swap(arr, i, j) {
    // swap index and pivot index
    // define temp variable to store index
    let temp = arr[i]
    // swap
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort([5,4,19,2,10,11,7]))

function quickSort(arr, start = 0, end = arr.length) {
    // breaking condition, when only one value in array
    if (start > end - 1) { return arr }
    // define middle from partition
    const middle = partition(arr, start, end - 1)
    // resurive calls with left and right
    quickSort(arr, start, middle)
    quickSort(arr, middle + 1, end)
    // return array
    return arr
}

function partition(arr, start, end) {
    // define pivot "index" (use 0) and "pivot" value (use last in arr)
    let pivot = arr[end]
    let j = start
    // loop through arr starting at "start"
    for (let i = start; i < end; i++) {
        // check if index is less than pivot "value"
        if (arr[i] <= pivot) {
            // swap index and pivot "index"
            swap(arr, i, j)
            j++
        }
    }
    // swap pivot "value" and pivot "index"
    swap(arr, end, j)
    return j
}

function swap(arr, i, j) {
    // define temp for i
    const temp = arr[i]
    // swap values
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort([5,4,19,2,10,11,7]))