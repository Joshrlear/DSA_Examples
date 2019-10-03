function binarySearch(arr, val, start = 0, end = arr.length) {
    // breaking condition
    if (start >= end) { return -1 }
    // find middle and check item val
    const middle = Math.floor((start + end) / 2)
    const item = arr[middle]
    if (item == val) { return { index: middle, value: item }}
    else if (item > val) { return binarySearch(arr, val, start, middle - 1) }
    else { return binarySearch(arr, val, middle + 1, end) }
}
console.log(binarySearch([5,10,15,20,25,30,35,40], 15))

function binarySearch2(arr, val, start = 0, end = arr.length) {
    if (start >= end) { return -1 }
    const middle = Math.floor((start + end) / 2)
    const item = arr[middle]
    if (item == val) { return { index: middle, value: item } }
    else if (item > val) { return binarySearch2(arr, val, start, middle - 1)}
    else { return binarySearch2(arr, val, middle + 1, end)}
}
console.log(binarySearch2([5,10,15,20,25,30,35,40], 35))

function binarySearch3(arr, val, start = 0, end = arr.length) {
    if (start >= end) { return -1 }
    const middle = Math.floor((start + end) / 2)
    const item = arr[middle]
    if (item == val) { return { index: middle, value: item } }
    else if (val < item) { return binarySearch3(arr, val, start, middle - 1) }
    else { return binarySearch3(arr, val, middle + 1, end) }
}

console.log(binarySearch2([5,10,15,20,25,30,35,40], 40))