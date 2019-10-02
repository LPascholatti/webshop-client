import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, url } = products

    return <li key={name}>
      {name + ":"}
      {/* <Link to={`products/${id}`}></Link> */}
      {name}<img alt={name} src={url}></img>
    </li>

  }

  render() {

    console.log('this.props test', this.props)

    const { products } = this.props

    return (
      <div className='products-container'>
        <div className='products-list'>
          <h1>Products:</h1>
          {<ul>
            {!products && 'Loading...'}
            {
              products &&
              <ul>{products.map(this.renderProducts)} </ul>
            }
          </ul>}
        </div>
      </div>
    )
  }
}