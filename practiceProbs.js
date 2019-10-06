const LinkedList = require('./dataStructures/LinkedList')
const HashMap = require('./dataStructures/HashMap')

/* 
Given a document, implement an algorithm to count the number of word occurrences. 

Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`  */

{
/* function countWords(string) {
    const arr = string.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').sort()
    let repeatedWords = []
    let wordCount = []
    let prev;
    for (i in arr) {
        if (arr[i] !== prev) {
            repeatedWords.push(arr[i])
            wordCount.push(1)
        }
        else {
            wordCount[wordCount.length - 1]++
        }
        prev = arr[i]
    }
    let result = []
    for (i in repeatedWords) {
        result.push({word: repeatedWords[i], count: wordCount[i]})
    }
    return result
} */
}
{
/* function countWords(string) {
    const arr = string.replace(/[^a-zA-Z0-9]/g, ',').split(',').sort()
    let a = []
    let b = []
    let result = []
    let prev;
    for (i in arr) {
        if (arr[i] !== prev) {
            a.push(arr[i])
            b.push(1)
        }
        else {
            b[b.length - 1]++
        }
        prev = arr[i]
    }

    for (i in a) {
        result.push({word: a[i], count: b[i]})
    }
    return result
} */
}

function countWords(string) {
    const arr = string.replace(/[^a-zA-Z0-9]/g,',').split(',').sort() // O(n) + O(n) + O(nlog(n)) = O(n)
    let a = []
    let b = []
    let result = []
    let prev;
    for (i in arr) { // O(n)
        if (arr[i] !== prev && arr[i] !== '') {
            a.push(arr[i])
            b.push(1)
        }
        else {
            b[b.length - 1]++
        }
        prev = arr[i]
    }
    for (i in a) { // O(n)
        result.push({word: a[i], count: b[i]})
    }
    return result
}
// this is an O(n)
//console.log(countWords("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"))

/* 
Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list. */

{
/* function delDups(list) {
    // create HashMap and insert each node of list to hashTable
    const hash = new HashMap
    // find if key is already present. if so push remove from list
    let currNode = list.head
    while (currNode) {
        let key;
        try { key = hash.get(currNode.value) }
        catch { key = undefined }
        //console.log(key, currNode.value)
        if (key === undefined) {
            //console.log('setting',key, currNode.value)
            hash.set(currNode.value, currNode.value)
        }
        else {
            //console.log('removing', key, currNode.value)
            list.remove(currNode.value)
        }
        currNode = currNode.next
    }
    return list
} */
}

function countDups(list) {
    const hash = new HashMap
    // define index from linkedList node and key for setting in hashmap
    let i = list.head
    let key;
    // loop through list and use find to see if already exists
    while (i !== null) {
        // try/catch
        try {
            // exists, then set(key, value: value++)
            key = hash.get(i.value)
        }
        catch {
            // not exists, set(key, value: 0)
            key = null
        }
        if (key === null) { hash.set(i.value, 1) }
        else { hash.set(i.value, key + 1) }
        i = i.next
    }
    return hash
}

/* 
Given a string, write an algorithm to count the number of 
words in the string that are palindromes. The output must 
include a list of the palindromes and the number of palindromes. 

 - Input: `"Dad gave mom a Tesla as a racecar"`
 - Output: `Dad, mom, racecar, 3 Palindromes`   */

{
/* function countPalindromes(string) {
    let palindromes = []
    // convert string to array of words
    const arr = string.replace(/[^a-zA-Z0-9]/g, ',').toLowerCase().split(',')
    // while arr
    while (arr.length > 0) {
        // pop index and split in the middle
        console.log(arr)
        let word = arr.shift()
        let isPalindrome = true
        let middle = word.length > 1 ? word.length / 2 : word.length
        if (word.length % 2 !== 0) {
            // define left and right compare left[i] to right[right.length] - i
            let left = word.slice(word[0], middle)
            let right = word.slice(middle + 1, word.length)
            console.log('left:', left, 'right:', right)
            // if equal push to palindrome array
            for (let j = 0; j < middle; j++) {
                
                //console.log('left:', left[j], 'right:', right[right.length - (1 + j)])
                if (left[j] !== right[right.length - (1 + j)]) {
                    
                    isPalindrome = false
                }
            }
        }
        // evens split down middle
        else {
            // define left and right compare left[i] to right[right.length] - i
            let left = word.slice(word[0], middle)
            let right = word.slice(middle, word.length)
            //console.log('left:', left, 'right:', right)
            // if equal push to palindrome array
            for (let j = 0; j < middle; j++) {
                
                //console.log('left:', left[j], 'right:', right[right.length - (1 + j)])
                if (left[j] !== right[right.length - (1 + j)]) {
                    
                    isPalindrome = false
                }
            }
        }
        //console.log(isPalindrome)
        if (isPalindrome) { palindromes.push(word) }
    }
    const result = palindromes + ' ' + palindromes.length + ' palindromes'
    return result
} */
}

function countPalindromes(string) {
    let palindromeArr = []
    const arr = string.replace(/[^a-zA-Z0-9]/g, ',').toLowerCase().split(',')
    // [should,look,like,this] --> [s,h,o,u,l,d]
    for (i in arr) {
        let isPalindrome = true
        //console.log('word:',arr[i])
        const word = arr[i]
        const middle = Math.floor(word.length / 2)
        //console.log(middle, word[middle])
        for (let j = 0; j < word.length; j++) {
            // if even/odd
            if (word.length % 2 !== 0) {
                const left = word.length > 1 ? word.slice(word[0], middle) : word[j]
                const right = word.slice(middle + 1, word.length)
                while (j < left.length) {
                    if (left[j] !== right[right.length - (1 + j)]) {
                        isPalindrome = false
                    }
                    j++
                }
            }
            else {
                const left = word.slice(word[0], middle)
                const right = word.slice(middle, word.length)
                while (j < left.length) {
                    if (left[j] !== right[right.length - (1 + j)]) { 
                        isPalindrome = false
                    }
                    j++
                }
            }
        }
        isPalindrome && palindromeArr.push(word)
    }
    return `${palindromeArr} ${palindromeArr.length} palindromes`
}

/* 
Given 2 linked lists, where each node in each linked list 
represents a character in a string, write a function compare() 
that compares the 2 strings, i.e., it returns 0 if both strings 
are the same, 1 if the 1st linked list is lexicographically 
greater, and -1 if the 2nd string is lexicographically greater.*/

function linkedListCheck(list1, list2) {
    let curr1 = list1.head
    let curr2 = list2.head
    while (curr1 !== null && curr2 !== null) {
        if (curr1.value > curr2.value) { return 1 }
        if (curr1.value < curr2.value) { return -1 }
        curr1 = curr1.next
        curr2 = curr2.next
    }
    if (curr1 !== null) { return 1 }
    if (curr2 !== null) { return -1 }
    return 0
}

/* 
Given a list of integers find the mode and the frequency of the mode. 
The mode in a list of numbers is the value that occurs the 
most often. If no number in the list is repeated, 
then there is no mode for the list. 

- Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
- Output: `Mode = 3, Frequency of mode = 4`

*/

function mode(arr) {
    const hash = new HashMap
    let frequency = 0;
    let mode;
    // define key from arr
    for (i in arr) {
        //console.log(arr[i])
        let key = arr[i]
        //try/catch
        try {
            const value = hash.get(key)
            hash.set(key, value + 1)
            if (frequency < value) {
                frequency = value + 1
                mode = key
            }
        }
        catch {
            hash.set(key, 1)
        }
    }
    return `Mode = ${mode}, Frequency of mode = ${frequency}`
}

/* 
Write a function that takes an array of numbers 
and returns the greatest difference you can get 
by subtracting any two of those numbers.

For example, if our input is [5,8,6,1], the 
greatest difference we can get is 8-1, which 
is 7. So we should return 7. */

function greatestDif(arr) {
    // use quickSort then subtract first and last value
    const sorted = quickSort(arr)
    console.log('info:',sorted, sorted[sorted.length - 1])
    const result = sorted[sorted.length - 1] - sorted[0]
    return result
}

function quickSort(arr, start = 0, end = arr.length) {
    if (start > end - 1) { 
        console.log('here:', start, end - 1)
        return arr }
        const currIndex = partition(arr, start, end - 1)
        quickSort(arr, start, currIndex)
        quickSort(arr, currIndex + 1, end)
        return arr
}

function partition(arr, start, end) {
    let pivot = arr[end]
    let j = start
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, j)
            j++
        }
    }
    swap(arr, end, j)
    return j
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

/* 
Write a function that takes an array of numbers 
and returns the smallest difference you can get 
by subtracting any two of those numbers.

must be positive integer.

For example, if our input is [5,8,6,1], the 
smallest difference we can get is 6-5, which 
is 1. So we should return 1. */

function smallestDiff(arr) {
    const sorted = mergeSort(arr)
    const result = findDiffs(sorted)
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)
    mergeSort(left)
    mergeSort(right)
    return merge(arr, left, right)
}

function merge(arr, left, right) {
    let retArrIndex = 0
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        arr[retArrIndex] = left[leftIndex] < right[rightIndex]
            ? arr[retArrIndex++] = left[leftIndex++]
            : arr[retArrIndex++] = right[rightIndex++]
    }
    arr[retArrIndex] = leftIndex < left.length 
        ? left[left.length - 1] 
        : right[left.length - 1]
    return arr
}

function findDiffs(arr) {
    if (arr.length <= 1) { return arr }
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)
    mergeSort(left)
    mergeSort(right)
    return calcDiffs(arr, left, right)
}

function calcDiffs(arr, left, right) {
    let result;
    let temp = arr[arr.length - 1]
    // always compare last in left and first in right
    if ((left[left.length - 1] - right[0]) < temp && (left[left.length - 1] - right[0]) > 0) {
        result = {
            value1: left[left.length - 1],
            value2: right[0],
            difference: left[left.length - 1] - right[0]
        }
    }
    else {
        result = {
            value1: right[0],
            value2: left[left.length - 1],
            difference: right[0] - left[left.length - 1]
        }
    }
    return result
}

function main() {
    const list = new LinkedList
    list.insertLast('5')
    list.insertLast('12')
    list.insertLast('7')
    list.insertLast('8')
    list.insertLast('12')
    list.insertLast('7')
    list.insertLast('3')
    list.insertLast('7')
    //console.log('list:', JSON.stringify(list))
    //console.log()
    //console.log()
    //console.log('delete dups:',JSON.stringify(delDups(list)))
    //console.log('count dups:',countDups(list))
    //console.log('count palindromes:',countPalindromes("Dad gave mom a Tesla as a racecar"))
    const list1 = new LinkedList
    const list2 = new LinkedList
    list1.insertLast('B')
    list1.insertLast('i')
    list1.insertLast('l')
    list1.insertLast('b')
    list1.insertLast('o')
    //list1.insertLast('a')

    list2.insertLast('B')
    list2.insertLast('i')
    list2.insertLast('l')
    list2.insertLast('b')
    list2.insertLast('o')
    list2.insertLast('a')
    //console.log('linkedList check:', linkedListCheck(list1, list2))
    //console.log(mode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))
    //console.log(greatestDif([5,8,6,1]))
    console.log(smallestDiff([5,8,6,1]))
    console.log(smallestDiff([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))
}
main()