import { combineReducers } from 'redux'
import products from '../reducers/products'
import product from '../reducers/product'
import user from '../reducers/user'

export default combineReducers({
  products,
  user,
  product
})