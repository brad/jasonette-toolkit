import Jasonette from '../base'
import Util from './util'


export default class Actions extends Jasonette {
  trigger = (name) => ({"trigger": name})

  $reload = () => this.type('$reload')

  $href = (url, options) => ({
    type: '$href',
    options: this.href(url, options)
  })

  $util = new Util()
}
