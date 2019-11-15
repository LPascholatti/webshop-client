import { LOGGED_EMAIL } from '../actions'

export default function (state = '', action = {}) {
  switch (action.type) {
    case LOGGED_EMAIL: {
      return action.payload
    }
    default: 
    return state
  }
}