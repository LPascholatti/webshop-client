import { PRODUCT_FETCHED, UPDATE_PRODUCT } from "../actions";

const reducer = (state = {}, action) => {
  switch(action.type) {
    case PRODUCT_FETCHED:{
      return action.payload
    }
    case UPDATE_PRODUCT:{
      return action.payload
    }
    default:
      return state
  }
}

export default reducer

