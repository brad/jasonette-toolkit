import assert from 'assert'

import JT from '../src'


describe('JT', () => {
  describe('components', () => {
    describe('label()', () => {
      it('should output an object representing a label', () => {
        let label = JT.components.label('Hello, world!', {style: {font: 'Avenir'}})

        assert.equal('label', label.type)
        assert.equal('Hello, world!', label.text)
        assert.equal('Avenir', label.style.font)

        JT.components.labelOptions = {style: {color: 'rgb(200,0,0)'}}

        label = JT.components.label('Hello, world2!')

        assert.equal('label', label.type)
        assert.equal('Hello, world2!', label.text)
        assert.equal('rgb(200,0,0)', label.style.color)
        assert(undefined === label.style.font)
      })
    })

    describe('image()', () => {
      it('should output an object representing an image', () => {
        let image = JT.components.image(
            'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
            {style: {corner_radius: 10}}
        )

        assert.equal('image', image.type)
        assert.equal(
          'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
          image.url)
        assert(undefined === image.header)
        assert.equal(10, image.style.corner_radius)

        JT.components.imageOptions = {
          header: {
            auth_token: '3nfdss3fNdlenghs_dnekgldnvq334hd'
          },
          style: {
            width: 200
          }
        }

        image = JT.components.image('https://example.com/image.png')

        assert.equal('image', image.type)
        assert.equal('https://example.com/image.png', image.url)
        assert('3nfdss3fNdlenghs_dnekgldnvq334hd' === image.header.auth_token)
        assert(undefined == image.style.corner_radius)
        assert.equal(200, image.style.width)
      })
    })

    describe('button()', () => {
      it('should output an object representing an button', () => {
        const button = JT.components.button('Submit', {type: '$reload'}, {style: {corner_radius: 10}})

        assert.equal('button', button.type)
        assert.equal('Submit', button.text)
        assert.equal('$reload', button.action.type)
        assert(undefined === button.url)
        assert(undefined === button.header)
        assert.equal(10, button.style.corner_radius)
      })

      it('should detect a url', () => {
        const button = JT.components.button(
          'https://example.com/image.png',
          {type: '$reload'},
          {style: {corner_radius: 10}}
        )

        assert.equal('button', button.type)
        assert.equal('https://example.com/image.png', button.url)
        assert.equal('$reload', button.action.type)
        assert(undefined === button.text)
        assert(undefined === button.header)
        assert.equal(10, button.style.corner_radius)
      })
    })

    describe('textfield()', () => {
      it('should output an object representing an textfield', () => {
        const textfield = JT.components.textfield('password', 'dhenf93f!', 'Enter password', {style: {width: 200}})

        assert.equal('textfield', textfield.type)
        assert.equal('password', textfield.name)
        assert.equal('dhenf93f!', textfield.value)
        assert.equal('Enter password', textfield.placeholder)
        assert.equal(200, textfield.style.width)
      })
    })

    describe('textarea()', () => {
      it('should output an object representing an textarea', () => {
        const textarea = JT.components.textarea(
          'status',
          'Eating lunch...',
          'Status update',
          {style: {background: 'rgba(0,0,0,0)'}}
        )

        assert.equal('textarea', textarea.type)
        assert.equal('status', textarea.name)
        assert.equal('Eating lunch...', textarea.value)
        assert.equal('Status update', textarea.placeholder)
        assert.equal('rgba(0,0,0,0)', textarea.style.background)
      })
    })

    describe('slider()', () => {
      it('should output an object representing an slider', () => {
        const slider = JT.components.slider('gauge', 0.3, {trigger: 'notice'})

        assert.equal('slider', slider.type)
        assert.equal('gauge', slider.name)
        assert.equal(0.3, slider.value)
        assert.equal('notice', slider.action.trigger)
        assert(undefined === slider.style)
      })
    })
  })
})
