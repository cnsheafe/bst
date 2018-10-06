const BST = require('./bst')

describe('BST', () => {
  let rootData = { data: 25, msg: 'This is the root' }

  beforeEach(() => {
    rootData = { data: 25, msg: 'This is the root' }
  })

  describe('#insert', () => {
    let tree = new BST(10, rootData)

    beforeEach(() => {
      tree = new BST(10, rootData)
    })

    it('should insert a new node', () => {
      tree.insert(5, { data: 4, msg: 'This is new' })

      expect(tree.left.value).toEqual({ data: 4, msg: 'This is new' })
    })

    it('should correctly replace a node', () => {
      tree.insert(10, { data: 100, msg: 'Replaced' })

      expect(tree.value).toEqual({ data: 100, msg: 'Replaced' })
    })

    it('should insert nodes in the proper order', () => {
      const data = [
        { data: 45, msg: 'First' },
        { data: 13, msg: 'Second' },
        { data: 27, msg: 'Third' },
      ]

      tree.insert(15, data[0])
      tree.insert(20, data[1])
      tree.insert(3, data[2])

      expect(tree.value).toEqual(rootData)
      expect(tree.left.value).toEqual(data[2])
      expect(tree.right.value).toEqual(data[0])
      expect(tree.right.right.value).toEqual(data[1])

      // Check to see that no further nodes were added
      expect(tree.left.left).toBe(null)
      expect(tree.right.left).toBe(null)
      expect(tree.right.right.right).toBe(null)
    })
  })

  describe('#get', () => {
    let tree = new BST(10, rootData)

    beforeEach(() => {
      tree = new BST(10, rootData)
    })

    it('should get the root', () => {
      const root = tree.get(10)

      expect(root).toEqual(rootData)
    })
  })
})
