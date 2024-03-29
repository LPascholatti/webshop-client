import React from "react";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  const { onSubmit, onChange, values } = props;
  console.log("VALUES", values);

  return (
    <div className="login-form">
      <h4>Sign Up to Sell:</h4>
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
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder="password"
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={values.username}
            placeholder="username"
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            onChange={onChange}
            value={values.address}
            placeholder="address"
          />
        </label>

        <input type="submit" />
      </form>
      <br/>
      <Link to='/'>Return</Link>
    </div>
  );
}
