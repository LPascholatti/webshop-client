import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', token: this.state }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
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
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      token={this.props.token}
    />
  }
}

const mapStateToProps = state => ({
  token: state.user,
})

export default connect(mapStateToProps, { login })(LoginFormContainer)