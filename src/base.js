export default class Jasonette {
  type = (type) => ({ type: type })

  href = (url, options) => Object.assign({url: url}, options)
}
