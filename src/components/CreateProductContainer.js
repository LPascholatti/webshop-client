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
    return (<CreateProduct
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      token={this.props.token}
    />)
  }
}

const mapStateToProps = state => ({
  token: state.user,
  address: state.address,
  email: state.email,
  username: state.username
})

export default connect(mapStateToProps, { createProduct })(CreateProductContainer)