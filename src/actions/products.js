import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED'
export const NEW_PRODUCT = 'NEW_PRODUCT'
export const JWT = 'JWT'
export const NEW_USER = 'NEW_USER'

const baseUrl = 'http://localhost:4000'

const productsFetched = payload => ({
  type: PRODUCTS_FETCHED,
  payload
})

const productFetched = payload => ({
  type: PRODUCT_FETCHED,
  payload
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

function newUser(email, password) {
  return {
    type: NEW_USER,
    payload: (email, password)
  }
}

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

export const signUp = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/user`)
    .send(email, password)
    .then(response => {
      const action = newUser(response.body)
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
      dispatch(action)
    })
    .catch(console.error)
}