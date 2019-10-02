import React from 'react'

export default function ProductDetails(props) {
  console.log('props.event', props.products)

  const { name, id, description, email, sellerAddress, price, imageURL  } = props.products;

  return (
    <div className="productDetails">
      <h1>{name + " " + id}</h1>
      <br />
      <i>{price}</i>
      <p>
        {!description && "Loading..."}
        {description}
        <br/>
        <img alt={name} src={imageURL}/>
        <br/>
        By seller:
        {email + " " + sellerAddress}
        <p>
          {}
        </p>
      </p>
    </div>
  )
}