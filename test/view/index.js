import assert from 'assert'

import JT from '../../src'


describe('JT', () => {
  describe('view', () => {
    describe('head', () => {
      it('should output an object representing a head element', () => {
          let head = JT.view.head('my title')

          assert.equal(1, Object.keys(head).length)
          assert.equal('my title', head.title)

          head = JT.view.head('title2', {description: 'a description', offline: 1})

          assert.equal('title2', head.title)
          assert.equal('a description', head.description)
          assert.equal(1, head.offline)
      })
    })
  })
})
