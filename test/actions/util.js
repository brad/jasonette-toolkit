import assert from 'assert'

import JT from '../../src'


describe('JT', () => {
  describe('actions', () => {
    describe('$util', () => {
      describe('banner()', () => {
        it('should output an object representing a $util.banner action', () => {
          let banner = JT.actions.$util.banner('This is a title', 'this is a description')

          assert.equal('$util.banner', banner.type)
          assert.equal('This is a title', banner.options.title)
          assert.equal('this is a description', banner.options.description)
          assert.equal('info', banner.options.type)

          banner = JT.actions.$util.banner('This is title2', 'this is description2', 'error')

          assert.equal('$util.banner', banner.type)
          assert.equal('This is title2', banner.options.title)
          assert.equal('this is description2', banner.options.description)
          assert.equal('error', banner.options.type)
        })
      })
      describe('toast()', () => {
        it('should output an object representing a $util.toast action', () => {
          let toast = JT.actions.$util.toast('toast text')

          assert.equal('$util.toast', toast.type)
          assert.equal('toast text', toast.options.text)
          assert.equal('success', toast.options.type)

          toast = JT.actions.$util.toast('toast text2', 'error')

          assert.equal('$util.toast', toast.type)
          assert.equal('toast text2', toast.options.text)
          assert.equal('error', toast.options.type)
        })
      })
    })
  })
})
