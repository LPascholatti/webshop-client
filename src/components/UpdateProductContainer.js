import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putRequestProduct, deleteProduct } from '../actions';
import UpdateProductForm from './UpdateProductForm';

class UpdateProductContainer extends Component {

  state = {
    name: '',
    imageURL: '',
    id: this.props.product.id,
    description: '',
    price: '',
    email: this.props.email,
    sellerAddress: this.props.address,
    token: this.state,
    externalUrl: '',
    seller: this.props.username
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onDelete = () => {
    this.props.deleteProduct(this.props.product.id)
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
      externalUrl: ''
    })
  }

  render() {
    return (<UpdateProductForm
    onSubmit={this.onSubmit}
    onChange={this.onChange}
    onDelete={this.onDelete}
    values={this.state}
    username={this.props.username}
    product={this.props.product}
    />)
  }
}

const mapStateToProps = state => ({
  token: state.user,
  address: state.address,
  email: state.email,
  username: state.username,
  product: state.product
})

export default connect(mapStateToProps, {putRequestProduct, deleteProduct})(UpdateProductContainer)
