import React, { Component } from 'react'
import CreateProductContainer from './CreateProductContainer'
import { Link } from 'react-router-dom'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, id, imageURL, price, description, email, sellerAddress } = products
    console.log("URL", imageURL)

    return <li key={name}><div className="productTitle"><p style={{ fontWeight: "bold" }}>ID: {id}
      <br /><br /><Link to={`products/${id}`}>{name}</Link></p></div><br />
      {"Description: " + description} <br />
      {"Price: " + price + " euros"} <br />
      {"Seller e-mail: " + email} <br />
      {"Seller address: " + sellerAddress} <br />
      <br />
      <img alt={name} src={imageURL} />
    </li>

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