import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ProductsListContainer from "./components/ProductsListContainer";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetailsContainer from "./components/ProductDetailsContainer";
import SignUpContainer from "./components/SignUpContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> Buy and Sell App</h1>
          <hr />
        </header>
        <body>
          <main className="App-body">
            <Link to="/signup">Sign Up</Link>
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/" exact component={ProductsListContainer} />
            <Route path="/products/:id" component={ProductDetailsContainer} />
          </main>
          <footer className="footer">
            <hr/>
            <p>Powered by Lucas</p>
          </footer>
        </body>
      </div>
    </Provider>
  );
}

export default App;
