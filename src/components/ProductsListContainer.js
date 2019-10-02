import React from 'react'
import {loadProducts} from '../actions/products'
import {connect} from 'react-redux'
import ProductsList from './ProductsList'

class ProductsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return <ProductsList products={this.props.products} />
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = { loadProducts }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer)