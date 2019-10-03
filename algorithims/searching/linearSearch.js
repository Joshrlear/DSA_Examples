function linearSearch(arr, val) {
    for (i in arr) {
        if (arr[i] == val) { return {index: i, value: arr[i]} }
    }
}
console.log(linearSearch([1,8,5,4,9,12], 4))

function linearSearch2(arr, val) {
    if (!arr || arr.length < 1 || !val) { return -1 }
    for (i in arr) {
        if (arr[i] == val) { return {index: i, value: arr[i]} }
    }
}
console.log(linearSearch2([1,8,5,4,9,12], 9))