import assert from 'assert'

import JT from '../../src'


describe('JT', () => {
  describe('view', () => {
    describe('body', () => {
      describe('ad', () => {
        it('should output an object representing a body ad', () => {
          let ad = JT.view.body.ad('admob', 'banner', 'a14dccd0fb24d45')

          assert.equal('admob', ad.type)
          assert.equal('banner', ad.options.type)
          assert.equal('a14dccd0fb24d45', ad.options.unitId)

          ad = JT.view.body.ad('admob', 'interstitial', 'ca-app-pub-660630324798')

          assert.equal('admob', ad.type)
          assert.equal('interstitial', ad.options.type)
          assert.equal('ca-app-pub-660630324798', ad.options.unitId)
        })
      })
    })
  })
})
