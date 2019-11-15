import React from 'react';
import { Link } from "react-router-dom";
import ProductsListContainer from './ProductsListContainer';

export default function LoginForm(props) {
  const { onSubmit, onChange, values } = props;
  return (
    <div className="login-form">
      <h4>Login to Add New Products</h4>
      <form onSubmit={onSubmit}>
        <label>
          E-mail:
          <input
          type="text"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="e-mail"
          />
        </label>

        <label>
          Password:

          <input
          type="text"
          name="password"
          onChange={onChange}
          value={values.password}
          placeholder="password"
          />
        </label>

        <input type="submit"/>
      </form>
      <br/>
      {/* <Link to='/'>Return</Link> */}
      <ProductsListContainer/>
    </div>
  )
}