import React from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../actions'
import CreateProduct from './CreateProduct'

class CreateProductContainer extends React.Component {
  state = {
    name: '',
    imageURL: '',
    id: Math.floor(Math.random() * 9999),
    description: '',
    price: '',
    email: '',
    sellerAddress: '',
    token: this.state
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
      token={this.props.token}
    />)
  }
}

const mapStateToProps = state => ({
  token: state.user
})

export default connect(mapStateToProps, { createProduct })(CreateProductContainer)