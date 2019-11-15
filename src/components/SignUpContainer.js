import React from 'react'
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class SignUpContainer extends React.Component {
  state = { email: '', password: '', address: '', username: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signUp(this.state.email, this.state.password, this.state.address, this.state.username)
    this.setState({
      email: '',
      password: '',
      address: '',
      username: ''
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