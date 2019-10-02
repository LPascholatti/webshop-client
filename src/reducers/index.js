import { combineReducers } from 'redux'
import products from '../reducers/products'
import user from '../reducers/user'

export default combineReducers({
  products,
  user
})