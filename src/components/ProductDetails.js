import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetails(props) {
  console.log('props.event', props.product)

  const { name, id, description, email, sellerAddress, price, imageURL } = props.product;
  console.log("props.product", props.product)

  return (
    <div className="productDetails">
      <h1>{name}</h1>
      <br />
      <h3>Price: only {price} euros </h3>
      <p> Description: 
        {!description && "Loading..."}
        {" " + description}
        <br />
        <br />
        <img alt={name} src={imageURL} />
        <br />
        <br />
        By seller:
        <br/>
        <p>E-mail: {email}</p>
        <p> Seller Address: {sellerAddress}</p>
        <p> Product's ID:{" " + id}</p>
      </p>
      <button><Link to={'/'}>Return</Link></button>
      <br />
      <br />
      <br />
    </div>
  )
}