import assert from 'assert'

import JT from '../src'


describe('JT', () => {
  describe('href', () => {
    it('should output an object representing a link', () => {
      let href = JT.href('https://example.com')

      assert.equal(1, Object.keys(href).length)
      assert.equal('https://example.com', href.url)

      href = JT.href('https://example.com', {
        view: 'web',
        transition: 'modal',
        options: {a: 'b'}
      })

      assert.equal('https://example.com', href.url)
      assert.equal('web', href.view)
      assert.equal('modal', href.transition)
      assert.equal('b', href.options.a)
    })
  })
})
