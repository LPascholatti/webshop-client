import React, { Component } from "react";
import CreateProductContainer from "./CreateProductContainer";
import { Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class ProductList extends Component {
  renderProducts(products) {
    console.log("products test:", products);
    const { name, id, imageURL, price } = products;
    console.log("URL", imageURL);

    return (
      <div className="productsRender">
        <ul>
          <li key={name}>
            <Link to={`products/${id}`}>
              <h2>{name}</h2>
            </Link>
            <h2>{`${price}€`}</h2>
            <img alt={name} src={imageURL} />
            <br />
          </li>
        </ul>
      </div>
    );
  }

  render() {
    console.log("this.props test", this.props);

    const { products, token, username } = this.props;

    return (
      <div className="products-container">
        <div className="products-container-body">
          <h1>Products</h1>
          <h2>{`Hello ${username}! Welcome to Buy & Sell App!`}</h2>
          <h3>
            Below you will find a list of products being sold in our database:
          </h3>
          {!products && "Loading..."}
          {products && <ul>{products.map(this.renderProducts)} </ul>}
        </div>
        <Route path="/sell" component={CreateProductContainer} />
        {token !== "" && <div className="button-sell">
        <Link to="/sell">
          <Button variant="contained" color="primary">
            Sell Your Own:
          </Button>
        </Link>
        </div>}
      </div>
    );
  }
}
