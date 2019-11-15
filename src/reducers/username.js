
import { LOGGED_USER } from '../actions'

export default function (state = '', action = {}) {
  switch (action.type) {
    case LOGGED_USER: {
      return action.payload
    }
    default: 
    return state
  }
}