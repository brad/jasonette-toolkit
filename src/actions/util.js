import Jasonette from '../base'


export default class Util extends Jasonette {
  banner = (title, description, type) => ({
    type: '$util.banner',
    options: {
      title: title,
      description: description,
      type: type || 'info',
    },
  })

  toast = (text, type) => ({
    type: '$util.toast',
    options: {
      text: text,
      type: type || 'success',
    },
  })
}
