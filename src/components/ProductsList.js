import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, imageURL, price, description, email, sellerAddress } = products
    console.log("URL", imageURL)

    return <li key={name}>{name + ":"}<br />
        {"Description: " + description} <br />
        {"Price: " + price + " euros"} <br />
        {"Seller e-mail: " + email} <br />
        {"Seller address: " + sellerAddress} <br />
      <img alt={name} src={imageURL}/>
    </li>

  }

  /* <Link to={`products/${id}`}></Link> */

  render() {

    console.log('this.props test', this.props)

    const { products } = this.props

    return (
      <div className='products-container'>
        <div className='products-list'>
          <h2>Products:</h2>
          {!products && 'Loading...'}
          {
            products &&
            <ul>{products.map(this.renderProducts)} </ul>
          }
        </div>
      </div>
    )
  }
}