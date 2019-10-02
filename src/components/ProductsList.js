import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, id } = products

    return <li key={id}>
      <Link to={`products/${id}`}>{name}</Link>
    </li>

  }

  render() {

    console.log('this.props test', this.props)

    const { products } = this.props

    return (
      <div>
        <h1>Products:</h1>
        {<ul>
          {!products && 'Loading...'}
          {
            products &&
            <ul>{products.map(this.renderProducts)} </ul>
          }
        </ul>}
      </div>
    )
  }
}