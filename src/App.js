import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ProductsListContainer from './components/ProductsListContainer'
import { Provider } from 'react-redux'
import store from './store'
import ProductDetailsContainer from './components/ProductDetailsContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> Buy and Sell App</h1>
          <br/>
          <p>Below you will find a list of products being sold in our database</p>
        </header>
        <body>
          <main>
            <Route path="/" exact component={ProductsListContainer} />
            <Route path="/products/:id" component={ProductDetailsContainer} />
          </main>
          <footer className="footer">
            <p>Powered by Lucas</p>
          </footer>
        </body>
      </div>
    </Provider>
  );
}

export default App;
