import React from 'react'
import { connect } from 'react-redux'
import ProductDetails from './ProductDetails'
import { loadProducts } from '../actions/products'

class ProductDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts(Number(this.props.match.params.id))
  }

  render() {
    return <ProductDetails products={this.props.products} />
  }
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, {loadProducts})(ProductDetailsContainer)
