import { COMMENTS_FETCHED, COMMENT_CREATE } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case COMMENTS_FETCHED: {
      return action.payload
    }
    case COMMENT_CREATE: {
      console.log("action payload:", action.payload)
      return [action.payload, ...state]
    }
    default:
      return state
  }
}