import { combineReducers } from 'redux'
import products from '../reducers/products'
import product from '../reducers/product'
import user from '../reducers/user'
import username from '../reducers/username'
import email from '../reducers/email'
import address from '../reducers/address'
import comments from '../reducers/comments'

export default combineReducers({
  products,
  user,
  product,
  username,
  email,
  address,
  comments
})