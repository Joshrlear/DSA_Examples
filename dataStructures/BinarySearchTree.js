class BinarySearchTree1 {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        // no key, insert key/value here
        if (!this.key) {
            this.key = key
            this.value = value
        }
        // move to left child
        else if (key < this.key) {
            // left child is empty, create new bst and insert here
            if (!this.left) { this.left = new BinarySearchTree1(key, value, this) }
            // left child has key, repeat insert method on left child
            else { this.left.insert(key, value) }
        }
        else {
            if (!this.right) { this.right = new BinarySearchTree1(key, value, this) }
            else { this.right.insert(key, value) }
        }
    }

    find(key) {
        // this key is the key we are searching for
        if (key == this.key) { return { key: this.key, value: this.value } }
        // check left/right with recursion depending on less/more and return
        else if (key < this.key && this.left) { return this.left.find(key) }
        else if (key > this.key && this.right) { return this.right.find(key) }
        // didn't find return error messege
        else { throw new Error('Key not found')}
    }

    remove(key) {
        // found the key to be removed
        if (key == this.key) {
            // does it have a left and right child
            if (this.left && this.right) {
                // define successor with this.right._findMin
                const successor = this.right._findMin()
                // switch this key/value with successor and call remove on successor
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            // only one child, use _replaceWith(left/right)
            else if (this.left) { this._replaceWith(this.left) }
            else if (this.right) { 
                this._replaceWith(this.right) }
            // no children
            else { 
                this._replaceWith(null) }
        }
        // not node we're looking for. move to left/right depending on key comparison
        else if (key < this.key && this.left) { this.left.remove(key) }
        else if (key > this.key && this.right) { this.right.remove(key) }
        // key not found throw error
        else { throw new Error('Key not found') }
    }

    _replaceWith(node) {
        // "this" will refer to the node that called this method "this._replaceWith()"
        // if "this" (node.parent) has a parent
        if (this.parent) {
            // if "this" (node.parent) is the left/right child of it's parent (node.parent.parent)
            // remove connection between "this" (node.parent) and "this".parent (node.parent.parent)
            // and set node as node.parent.parent new left/right child
            if (this == this.parent.left) { this.parent.left = node }
            else if (this == this.parent.right) { this.parent.right = node }
            // if node exists
            // now this and this.parent connection broken make node.parent = this.parent (node.parent.parent)
            if (node) { node.parent = this.parent }
        }
        // node.parent doesn't have a parent and node exists
        else {
            // replace this (node.parent) key/value/left/right with node
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            // node.parent doesn't have parent and node not provided
            // set this (node.parent) key/value/left/right to null
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        // current node is smallest, return this
        if (!this.left) { return this }
        // recursive call with this.left
        return this.left._findMin()
    }
}

class BinarySearchTree2 {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        if (!this.key) {
            this.key = key
            this.value = value
        }
        else if (key < this.key) {
            if (!this.left) { this.left = new BinarySearchTree2(key, value, this) }
            else { this.left.insert(key, value) }
        }
        else {
            if (!this.right) { this.right = new BinarySearchTree2(key, value, this) }
            else { this.right.insert(key, value) }
        }
    }

    find(key) {
        if (key == this.key) { return {key: this.key, value: this.value} }
        else if (key < this.key && this.left) { return this.left.find(key) }
        else if (key > this.key && this.right) { return this.right.find(key) }
        else { throw new Error('Key not found')}
    }

    remove(key) {
        if (key == this.key) {
            if (this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            else if (this.left) { this._replaceWith(this.left) }
            else if (this.right) { this._replaceWith(this.right) }
            else { this._replaceWith(null) }
        }
        else if (key < this.key) { this.left.remove(key) }
        else if (key > this.key) { this.right.remove(key) }
        else { throw new Error('Key not found')}
    }

    _replaceWith(node) {
        // has parent
        if (this.parent) {
            // change parent/child connections
            if (this == this.parent.left) { this.parent.left = node }
            if (this == this.parent.right) { this.parent.right = node }
            if (node) { node.parent = this.parent }
        }
        // no parent
        else {
            // node to replace this (node.parent)
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            // no replace just remove
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        if (!this.left) { return this }
        return this.left._findMin()
    }
}

class BinarySearchTree3 {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        if (!this.key) {
            this.key = key
            this.value = value
        }
        else if (key < this.key) {
            if (!this.left) { this.left = new BinarySearchTree3(key, value, this) }
            else { this.left.insert(key, value) }
        }
        else {
            if (!this.right) { this.right = new BinarySearchTree3(key, value, this) }
            else { this.right.insert(key, value) }
        }
    }

    find(key) {
        if (key == this.key) { return {key: this.key, value: this.value} }
        else if (key < this.key && this.left) { return this.left.find(key) }
        else if (key > this.key && this.right) { return this.right.find(key) }
        else { throw new Error('Key not found') }
    }

    remove(key) {
        if (key == this.key) {
            if (this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            }
            else if (this.left) {
                this._replaceWith(this.left)
            }
            else if (this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) { this.left.remove(key) }
        else if (key > this.key && this.right) { this.right.remove(key) }
        else { throw new Error('Key not found') }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) { this.parent.left = node }
            else if (this == this.parent.right) { this.parent.right = node }
            if (node) { node.parent = this.parent }
        }
        else {
            if (node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.left
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin() {
        if (!this.left) { return this }
        return this.left._findMin()
    }

    preOrder(values = []) {
        // main function that pushes vals to arr
        values.push(this.value)
        // left recursive
        this.left && this.left.preOrder(values)
        // right recursive
        this.right && this.right.preOrder(values)
        return values
    }

    inOrder(values = []) {
        this.left && this.left.inOrder(values)
        values.push(this.value)
        this.right && this.right.inOrder(values)
        return values
    }

    postOrder(values = []) {
        this.left && this.left.postOrder(values)
        this.right && this.right.postOrder(values)
        values.push(this.value)
        return values
    }
}

let leftCount = rightCount = 0
function height(tree) {
    if (!tree) { return }
    if (tree.parent && (tree.parent.left == tree)) { leftCount++ }
    else { rightCount++ }
    height(tree.left)
    height(tree.right)
    const result = leftCount <= rightCount ? rightCount : leftCount
    return result
}

function main() {
    const bst = new BinarySearchTree3
    bst.insert(15, 'from')
    bst.insert(22, 'Fullstack')
    bst.insert(5, 'Hello')
    bst.insert(25, 'Engineering')
    bst.insert(20, "Thinkful's")
    bst.insert(10, 'World,')
    bst.insert(30, 'Flex')
    bst.insert(35, 'program!')
    //console.log('tree:',bst1)
    //console.log()
    //console.log(bst1.find(20))
    //console.log()
    bst.remove(22)
    //console.log('tree:', bst1)
    //console.log()
    //console.log(height(bst1))
    console.log(bst.preOrder())
    console.log(bst.inOrder())
    console.log(bst.postOrder())
}

main()
