import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const productsFetched = payload => ({
  type: PRODUCTS_FETCHED,
  payload
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