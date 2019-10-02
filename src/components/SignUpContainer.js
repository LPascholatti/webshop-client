import React from 'react'
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { signUp } from '../actions/products'

class SignUpContainer extends React.Component {
  state = { email: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <SignUp
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { signUp })(SignUpContainer)