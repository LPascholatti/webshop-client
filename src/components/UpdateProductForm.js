import React from "react";

export default function UpdateProductForm(props) {
  const { onSubmit, onChange, values, username, product } = props;
  console.log("VALUES IN UPDATE PRODUCT:", values);

  return (
    username === product.seller && (
      <div className="create-product-form">
        <h4>Update Your Product</h4>
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
          <label>
            Does this product has an external URL?
            <input
              type="string"
              name="externalUrl"
              onChange={onChange}
              value={values.externalUrl}
              placeholder="ExternalURL"
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  );
}
