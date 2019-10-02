import React from 'react'

export default function CreateProduct(props) {
  const { onSubmit, onChange, values } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Product ID:
          <input 
          type="number"
          name="id"
          onChange={onChange}
          value={values.id}
          placeholder="id"
          />
        </label>
        <label>
          Add the Product's Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="product_name"
          />
        </label>
        <label>
          Add the product's URL image:
          <input
            type="text"
            name="imageURL"
            onChange={onChange}
            value={values.imageURL}
            placeholder="image_URL"
          />
        </label>

        <label>
          Write a short description of this product:
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={values.description}
            placeholder="description"
          />
        </label>
        <label>
          What is the product's price?
        <input
            type="number"
            name="price"
            onChange={onChange}
            value={values.price}
            placeholder="price"
          />
        </label>

        <label>
          What is the seller's e-mail address?
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="email"
          />
        </label>

        <label>
          What is the seller's address?
          <input
          type="text"
          name="sellerAddress"
          onChange={onChange}
          value={values.sellerAddress}
          placeholder="sellerAddress"
          />
        </label>

      <input type="submit" />
      </form>
    </div>
  )
}