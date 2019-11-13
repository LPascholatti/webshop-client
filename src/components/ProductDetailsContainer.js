import React from 'react'
import { connect } from 'react-redux'
import ProductDetails from './ProductDetails'
import { loadProduct } from '../actions'

class ProductDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProduct(Number(this.props.match.params.id))
  }

  render() {
    return <ProductDetails product={this.props.product} />
  }
}

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, {loadProduct})(ProductDetailsContainer)
