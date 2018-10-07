module.exports = class BST {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }

  insert(key, value) {
    if (key === this.key || this.key === null) {
      this.key = key
      this.value = value
      return this
    }

    if (key < this.key) {
      if (this.left) return this.left.insert(key, value)
      this.left = new BST(key, value)

      return this.left
    }
    if (key > this.key) {
      if (this.right) return this.right.insert(key, value)
      this.right = new BST(key, value)

      return this.right
    }

    return this
  }

  get(key) {
    if (this.key === key) return this.value

    if (key < this.key) {
      if (this.left) return this.left.get(key)
    }

    if (key > this.key) {
      if (this.right) return this.right.get(key)
    }

    return null
  }

  getDepth() {
    return this.depth()
  }

  depth(counter) {
    // Checks head
    if (!this.key) return 0

    let leftCounter = 1
    let rightCounter = 1


    if (counter) {
      leftCounter = counter
      rightCounter = counter
    }

    if (this.left !== null) leftCounter = this.left.depth(leftCounter + 1)
    if (this.right !== null) rightCounter = this.right.depth(rightCounter + 1)

    return leftCounter > rightCounter ? leftCounter : rightCounter
  }
}
