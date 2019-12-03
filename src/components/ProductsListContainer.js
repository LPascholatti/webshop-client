import React from 'react'
import { loadProducts } from '../actions'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'

class ProductsListContainer extends React.Component {

  state = {
    token: this.state
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return <ProductsList 
    products={this.props.products} 
    token={this.props.token}
    username={this.props.username}
    />
  }
}

const mapStateToProps = state => ({
  products: state.products,
  token: state.user,
  username: state.username
})

const mapDispatchToProps = { loadProducts }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer)