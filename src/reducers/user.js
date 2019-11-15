import { JWT, NEW_USER, LOGGED_ADDRESS, LOGGED_USER } from '../actions'

export default function (state = '', action = {}) {
  switch (action.type) {
    case JWT: {
      return action.payload
    }
    case NEW_USER: {
      return action.payload
    }
    case LOGGED_USER: {
      return state
    }
    case LOGGED_ADDRESS: {
      return state
    }
    default: 
    return state
  }
}