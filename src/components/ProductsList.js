import React, { Component } from 'react'
import CreateProductContainer from './CreateProductContainer'
import { Link } from 'react-router-dom'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, id, imageURL, price } = products
    console.log("URL", imageURL)

    return <div className="productTitle">
      <li key={name}>
      <Link to={`products/${id}`}><h2>{name}</h2></Link>
      <h2>{`${price}€`}</h2>
      <img alt={name} src={imageURL} />
      <br/>
    </li>
    </div>

  }

  render() {

    console.log('this.props test', this.props)

    const { products } = this.props

    return (
      <div className='products-container'>
        <div className="signUp">
        </div>
        <div className='products-list'>
          <h2>Products</h2>
          <p>Below you will find a list of products being sold in our database</p>
          {!products && 'Loading...'}
          {
            products &&
            <ul>{products.map(this.renderProducts)} </ul>
          }
        </div>
        <CreateProductContainer />
      </div>
    )
  }
}