import React from 'react'

export default function CreateProduct(props) {
  const { onSubmit, onChange, values, token } = props;
  return (
    token !== "" && <div className="create-product-form">
      <h4>Sell Your Own Product</h4>
      <form onSubmit={onSubmit}>
        <br />
        <label>
          Add the Product's Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Product Name"
          />
        </label>
        <br />
        <label>
          Add the product's URL image:
          <input
            type="text"
            name="imageURL"
            onChange={onChange}
            value={values.imageURL}
            placeholder="Image URL"
          />
        </label>
        <br />
        <label>
          Write a short description of this product:
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={values.description}
            placeholder="Description"
          />
        </label>
        <br />
        <label>
          What is the product's price?
        <input
            type="number"
            name="price"
            onChange={onChange}
            value={values.price}
            placeholder="Price"
          />
        </label>
        <br />
        <label>
          What is the seller's e-mail address?
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="E-mail Address"
          />
        </label>
        <br />
        <label>
          What is the seller's address?
          <input
            type="text"
            name="sellerAddress"
            onChange={onChange}
            value={values.sellerAddress}
            placeholder="Seller Address"
          />
        </label>
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}