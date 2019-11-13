import { PRODUCT_FETCHED } from "../actions";

const reducer = (state = {}, action) => {
  switch(action.type) {
    case PRODUCT_FETCHED:{
      return action.payload
    }
    default:
      return state
  }
}

export default reducer

