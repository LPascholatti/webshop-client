import { JWT, NEW_USER } from '../actions/products'

export default function (state = '', action = {}) {
  switch (action.type) {
    case JWT: {
      return action.payload
    }
    case NEW_USER: {
      return action.payload
    }
    default: 
    return state
  }
}