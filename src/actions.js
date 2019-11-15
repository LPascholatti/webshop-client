import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED'
export const NEW_PRODUCT = 'NEW_PRODUCT'
export const JWT = 'JWT'
export const NEW_USER = 'NEW_USER'
export const LOGGED_USER = 'LOGGED_USER'
export const LOGGED_ADDRESS = 'LOGGED_ADDRESS'
export const LOGGED_EMAIL = 'LOGGED_EMAIL'
export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const productsFetched = payload => ({
  type: PRODUCTS_FETCHED,
  payload
})

const productFetched = payload => ({
  type: PRODUCT_FETCHED,
  payload
})

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  payload: comments
})

const newProduct = payload => ({
  type: NEW_PRODUCT,
  payload
})

function jwt(data) {
  return {
    type: JWT,
    payload: data
  }
}

function newUser(data) {
  return {
    type: NEW_USER,
    payload: data
  }
}

const userLogged = username => ({
  type: LOGGED_USER,
  payload: username
})

const addressLogged = address => ({
  type: LOGGED_ADDRESS,
  payload: address
})

const emailLogged = email => ({
  type: LOGGED_EMAIL,
  payload: email
})

export const loadProducts = () => (dispatch, getState) => {
  // when the state already contains products, we don't fetch them again
  const state = getState()
  const { products } = state

  if (!products.length) {
    // a GET /events request
    request(`${baseUrl}/products`)
      .then(response => {
        // dispatch an PRODUCTS_FETCHED action that contains the products
        const action = productsFetched(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

export const loadProduct = (id) => (dispatch) => {
  request(`${baseUrl}/products/${id}`)
    .then(response => {
      dispatch(productFetched(response.body))
      // .catch(console.error)
    })
}

export const loadComments = () => (dispatch, getState) => {
  const state = getState()
  const { comments } = state

  if (!comments.length) {
    request(`${baseUrl}/comment`)
    .then(response => {
      const action = commentsFetched(response.body)
      dispatch(action)
    })
    .catch(console.error)
  }
}

export const createProduct = data => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/products`)
    .set('Authorization', `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newProduct(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const signUp = (email, password, address, username) => (dispatch) => {
  console.log("email, password in Signup", email, password, address, username)
  request
    .post(`${baseUrl}/user`)
    .send({email, password, address, username})
    .then(response => {
      const action = newUser(response.body)
      console.log("action in signup", action)
      dispatch(action)
    })
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({
      email, password
    })
    .then(response => {
      const action = jwt(response.body.jwt)
      const action2 = userLogged(response.body.username)
      const action3 = addressLogged(response.body.address)
      const action4 = emailLogged(response.body.email)
      console.log('VALUES LOGGED:', response.body)
      dispatch(action)
      dispatch(action2)
      dispatch(action3)
      dispatch(action4)
    })
    .catch(console.error)
}