import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ProductsListContainer from "./components/ProductsListContainer";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetailsContainer from "./components/ProductDetailsContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginFormContainer from "./components/LoginFormContainer";
import "typeface-roboto";
import NavBar from "./components/NavBar";
import Button from "@material-ui/core/Button";
import CreateProductContainer from "./components/CreateProductContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          <main className="App-body">
            <div className="buttons">
              <Link to="/signup">
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
              </Link>
              <br />
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </Link>
            </div>
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/" exact component={ProductsListContainer} />
            <Route path="/products/:id" component={ProductDetailsContainer} />
            <Route path="/sell" component={CreateProductContainer} />
          </main>
          <footer className="footer">
            <hr />
            <a href="https://github.com/LPascholatti">
              <p>Powered by Lucas</p>
            </a>
          </footer>
        </body>
      </div>
    </Provider>
  );
}

export default App;
