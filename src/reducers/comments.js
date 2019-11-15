import { COMMENTS_FETCHED } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case COMMENTS_FETCHED: {
      return action.payload
    }
    default:
      return state
  }
}