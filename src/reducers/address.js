import { LOGGED_ADDRESS } from '../actions'

export default function (state = '', action = {}) {
  switch (action.type) {
    case LOGGED_ADDRESS: {
      return action.payload
    }
    default: 
    return state
  }
}