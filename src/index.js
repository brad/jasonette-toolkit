import Actions from './actions'
import Components from './components'
import Jasonette from './base'
import Layout from './layout'
import View from './view'


class JT extends Jasonette {
  actions = new Actions()
  components = new Components()
  layout = new Layout()
  view = new View()
}


export default new JT()
