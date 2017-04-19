import Jasonette from './base'


export default class Layout extends Jasonette {
  _layout = (type, components, style) => ({
    type: type,
    components: components,
    style: style,
  })

  horizontal = (components, style) => this._layout('horizontal', components, style)
  vertical = (components, style) => this._layout('vertical', components, style)
}
