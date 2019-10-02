import React from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../actions/products'
import CreateProduct from './CreateProduct'

class CreateProductContainer extends React.Component {
  state = {
    name: '',
    imageURL: '',
    id: '',
    description: '',
    price: '',
    email: '',
    sellerAddress: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.createProduct(this.state)

    this.setState({
      name: '',
      imageURL: '',
      id: '',
      description: '',
      price: '',
      email: '',
      sellerAddress: ''
    })
  }

  render() {
    return (<CreateProduct
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, { createProduct })(CreateProductContainer)