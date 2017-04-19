import Jasonette from '../base'


export default class Body extends Jasonette {
  ad = (provider, type, unitId) => ({
    type: provider,
    options: {type: type, unitId: unitId}
  })
}
