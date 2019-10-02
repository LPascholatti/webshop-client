import request from 'superagent'

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const productsFetched = products => ({
  type: PRODUCTS_FETCHED,
  products
})

export const loadProducts = () => (dispatch, getState) => {
  // when the state already contains products, we don't fetch them again
  if (getState().products) return

  // a GET /events request
  request(`${baseUrl}/products`)
    .then(response => {
      // dispatch an PRODUCTS_FETCHED action that contains the products
      dispatch(productsFetched(response.body))
    })
    .catch(console.error)
}