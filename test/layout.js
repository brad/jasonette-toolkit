import assert from 'assert'

import JT from '../src'


describe('JT', () => {
  describe('layout', () => {
    describe('horizontal', () => {
      it('should output an object representing a horizontal layout', () => {
        let horizontal = JT.layout.horizontal(
          [JT.components.label('test')], {align: 'center'})

        assert.equal('horizontal', horizontal.type)
        assert.equal('label', horizontal.components[0].type)
        assert.equal('test', horizontal.components[0].text)
        assert.equal('center', horizontal.style.align)
      })
    })

    describe('vertical', () => {
      it('should output an object representing a vertical layout', () => {
        let vertical = JT.layout.vertical(
          [JT.components.label('test2')], {align: 'center'})

        assert.equal('vertical', vertical.type)
        assert.equal('label', vertical.components[0].type)
        assert.equal('test2', vertical.components[0].text)
        assert.equal('center', vertical.style.align)
      })
    })
  })
})
