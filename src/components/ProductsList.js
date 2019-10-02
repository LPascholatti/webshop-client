import React, { Component } from 'react'
import CreateProductContainer from './CreateProductContainer'
import LoginFormContainer from './LoginFormContainer'
import { Link } from 'react-router-dom'
import SignUpContainer from './SignUpContainer'

export default class ProductList extends Component {

  renderProducts(products) {
    console.log('products test:', products)
    const { name, id, imageURL, price, description, email, sellerAddress } = products
    console.log("URL", imageURL)

    return <li key={name}><div className="productTitle"><p style={{fontWeight: "bold"}}>ID: {id} <br/><br/><Link to={`products/${id}`}>{name}</Link></p></div><br />
        {"Description: " + description} <br />
        {"Price: " + price + " euros"} <br />
        {"Seller e-mail: " + email} <br />
        {"Seller address: " + sellerAddress} <br />
        <br/>
      <img alt={name} src={imageURL}/>
    </li>

  }

  /* <Link to={`products/${id}`}></Link> */

  render() {

    console.log('this.props test', this.props)

    const { products } = this.props

    return (
      <div className='products-container'>
        <div className="signUp">
          <SignUpContainer/>
        </div>
        <div className='products-list'>
          <h2>Products</h2>
          {!products && 'Loading...'}
          {
            products &&
            <ul>{products.map(this.renderProducts)} </ul>
          }
        </div>
        <LoginFormContainer />
        <br/>
        <CreateProductContainer />
      </div>
    )
  }
}