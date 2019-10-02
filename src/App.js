import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
// import Home from './components/home'
import ProductsListContainer from './components/ProductsListContainer'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1> Buy and Sell App</h1>
        <img alt='logo' src='https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/01/shutter.jpg' />
      </header>
      <main>
      <Route path="/" exact component={ProductsListContainer} />
      </main>
    </div>
    </Provider>
  );
}

export default App;
