import assert from 'assert'

import JT from '../../src'


describe('JT', () => {
  describe('actions', () => {
    describe('trigger', () => {
      it('should output an object representing an action trigger', () => {
          let trigger = JT.actions.trigger('action_trigger')

          assert.equal(1, Object.keys(trigger).length)
          assert.equal('action_trigger', trigger.trigger)
      })
    })

    describe('$href', () => {
      it('should output an object representing an $href action', () => {
        let href = JT.actions.$href('https://example.com')

        assert.equal('$href', href.type)
        assert.equal(1, Object.keys(href.options).length)
        assert.equal('https://example.com', href.options.url)

        href = JT.actions.$href('https://example.com', {view: 'web', transition: 'modal', options: {a: 'b'}})

        assert.equal('https://example.com', href.options.url)
        assert.equal('web', href.options.view)
        assert.equal('modal', href.options.transition)
        assert.equal('b', href.options.options.a)
      })
    })

    describe('$reload', () => {
      it('should output an object representing a $reload action', () => {
          let reload = JT.actions.$reload()

          assert.equal(1, Object.keys(reload).length)
          assert.equal('$reload', reload.type)
      })
    })
  })
})
