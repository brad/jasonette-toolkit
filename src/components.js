import url from 'url'

import Jasonette from './base'


export default class Components extends Jasonette {
  labelOptions = {}
  label = (text, options) => Object.assign({
    type: 'label',
    text: text,
  }, this.labelOptions, options)

  imageOptions = {}
  image = (url, options) => Object.assign({
    type: 'image',
    url: url,
  }, this.imageOptions, options)

  buttonOptions = {}
  button(content, action, options) {
    let buttonObj = {
      type: 'button',
      action: action,
    }
    if(url.parse(content).host) {
      buttonObj.url = content
    } else {
      buttonObj.text = content
    }
    return Object.assign(buttonObj, this.buttonOptions, options)
  }

  _texttype = (type, name, value, placeholder, objOptions, options) => {
    return Object.assign({
      type: type,
      name: name,
      value: value,
      placeholder: placeholder,
    }, objOptions, options)
  }

  textfieldOptions = {}
  textfield(name, value, placeholder, options) {
    return this._texttype(
      'textfield', name, value, placeholder, this.textfieldOptions, options)
  }

  textareaOptions = {}
  textarea(name, value, placeholder, options) {
    return this._texttype(
      'textarea', name, value, placeholder, this.textareaOptions, options)
  }

  sliderOptions = {}
  slider = (name, value, action, options) => Object.assign({
    type: 'slider',
    name: name,
    value: value,
    action: action
  }, this.sliderOptions, options)
}
