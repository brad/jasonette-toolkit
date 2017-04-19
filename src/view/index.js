import Body from './body'
import Jasonette from '../base'


export default class View extends Jasonette {
  head = (title, options) => Object.assign({title: title}, options)

  body = new Body()
}
