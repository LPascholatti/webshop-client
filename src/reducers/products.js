import {PRODUCTS_FETCHED, NEW_PRODUCT} from '../actions/products'

const reducer = (state = [], action) => {
  switch(action.type) {
    case PRODUCTS_FETCHED: {
      return action.payload
    }
    case NEW_PRODUCT: {
      return [action.payload, ...state]
    }
    default: 
    return state
  }
}

export default reducer 