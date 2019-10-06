{
/* class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0
        this._hashTable = []
        this._capacity = initialCapacity
        this._deleted = 0
    }

    get(key){
        // define index from _findSlot()
        const index = this._findSlot(key)
        // check if slot is empty, return error if it is
        console.log('index:', index, this._hashTable[2])
        if (this._hashTable[index] === undefined) { throw new Error('Key not found') }
        // otherwise return slot value
        return this._hashTable[index].value
    }
    
    set(key, value) {
        // define loadRatio and check to see if we need to resize based on MAX_LOAD_RATIO
        const loadRatio = (this.length + this._deleted + 1) / this._capacity
        // exceeds max allowable load, need to resize
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            // resize the capacity to be n times the current capacity. n = size_ratio set 
            this._resize(this._capacity * HashMap.SIZE_RATIO)
        }
        // deifne index from _findSlot()
        const index = this._findSlot(key)
        // increase length by one if index doesn't exist
        if (!this._hashTable[index]) { this.length++ }
        // set key, value and DELETED
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }
    }

    delete(key) {
        // define index and slot
        const index = this. _findSlot(key)
        const slot = this._hashTable[index]
        console.log('here:',index,slot)
        // make sure slot exists, error if it doesn't
        if (slot === undefined) { throw new Error('Key not found') }
        // decrement length, increment _deleted and set slot.DELETED true
        slot.DELETED = true
        this.length--
        this._deleted++
    }

    _findSlot(key) {
        // need to get hash so that we can locate the index
        const hash = HashMap._hashString(key);
        // define the start of our loop based on the remainder after passing hash to _capacity
        const start = hash % this._capacity;
        // convert hash to index that fits into hashTable index using % and this.capacity
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                // return slot as long as not deleted
                return index;
            }
        }
    }

    _resize(size) {
        // define oldSlots from current slots
        const oldSlots = this._hashTable
        // define new capacity from size in args
        this._capacity = size
        // reset length, _deleted, and hashTable b/c we are going to recreate below
        this.length = 0
        this._deleted = 0
        this._hashTable = []
        // add all slots to new hashTable that don't have DELETED set to true
        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value)
            }
        }
    }

    static _hashString(string) {
        // define our hash number <-- I believe this is an arbitrary number used as a type of keycode
        let hash = 5381
        // loop through the string in args
        for (let i = 0; i < string.length; i++) {
            // set hash as = 00000 + hash + and unicode for string[i]
            hash = (hash << 5) + hash + string.charCodeAt(i)
            // multiply hashes to make 0*0=0, 0*1=0, 1*0=0, 1*1=1
            hash = hash & hash
        }
        // return the hash as a positive integer
        return hash >>> 0
    }
} */
}
{
/* class HashMap {
    constructor(cap = 8) {
        this.length = 0
        this._hashTable = []
        this._capacity = cap
        this._deleted = 0
    }

    get(key) {
        const index = this._findSlot(key)
        if (this._hashTable[index] === undefined) { throw new Error('Key not found') }
        return this._hashTable[index].value
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO)
        }
        const index = this._findSlot(key)
        
        if (!this._hashTable[index]) { this.length++ }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }
    }

    delete(key) {
        const index = this._findSlot(key)
        const slot = this._hashTable[index]
        if (slot === undefined) { throw new Error('Key not found') }
        slot.DELETED = true
        this.length--
        this._deleted++
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key)
        const start = hash % this._capacity
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity
            const slot = this._hashTable[index]
            if (slot === undefined || slot.key === key && !slot.DELETED) {
                return index
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable
        this._capacity = size
        this.length = 0
        this._hashTable = []
        this._deleted = 0
        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value)
            }
        }
    }

    static _hashString(key) {
        let hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) + hash + key.charCodeAt(i)
            hash = hash & hash
        }
        return hash >>> 0
    }
} */
}

class HashMap {
    constructor(cap = 8) {
        this.length = 0
        this._hashTable = []
        this._capacity = cap
        this._deleted = 0
    }

    get(key) {
        const index = this._findSlot(key)
        if (this._hashTable[index] === undefined) { throw new Error('Key not found') }
        return this._hashTable[index].value
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity
        if (loadRatio > HashMap.MAX_LOAD_RATIO) { this._resize(this._capacity * HashMap.SIZE_RATIO) }
        const index = this._findSlot(key)
        if (!this._hashTable[index]) { this.length++ }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }
    }

    delete(key) {
        const index = this._findSlot(key)
        const slot = this._hashTable[index]
        if (slot === undefined) { throw new Error('Key not found') }
        slot.DELETED = true
        this.length--
        this._deleted++
    }

    _findSlot(key) {
        const hash = HashMap._hashKey(key)
        const start = hash % this._capacity
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity
            const slot = this._hashTable[index]
            if (slot === undefined || slot.key === key && !slot.DELETED) {
                return index
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable
        this._capacity = size
        this.length = 0
        this._deleted = 0
        this._hashTable = []
        for (const slot of oldSlots) {
            if (this.slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value)
            }
        }
    }

    static _hashKey(key) {
        let hash = 5381
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) + hash + key.charCodeAt(i)
            hash = hash & hash
        }
        return hash >>> 0
    }
}

function main() {
    const hashmap = new HashMap
    hashmap.MAX_LOAD_RATIO = .75
    hashmap.SIZE_RATIO = 3
    hashmap.set('josh', 'Awesome')
    hashmap.set('Danielle', 'Nice titties')
    hashmap.set('Devan', 'A dork, but fun')
    hashmap.set('Ty', 'Speed demon')
    hashmap.set('Mirah', 'great ass')
    console.log(hashmap)
    console.log('find Ty:',hashmap.get('Ty'))
    hashmap.delete('Ty')
    hashmap.set('Ty', 'Ty-rant')
    hashmap.set('Danielle', 'The Dutch')
    hashmap.set('Devan', 'Two-time')
    console.log(hashmap)
}
//main()

module.exports = HashMap;