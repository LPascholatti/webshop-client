import React from 'react';
import { Link } from "react-router-dom";

export default function CreateProduct(props) {
  const { onSubmit, onChange, values, token } = props;
  console.log("VALUES CREATE PRODUCT", values)
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
        <input type="submit" />
      </form>
      <Link to='/'>Return</Link>
    </div>
  )
}