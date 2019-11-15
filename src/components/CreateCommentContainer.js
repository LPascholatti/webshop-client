import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import CreateCommentForm from './CreateCommentForm'

class CreateCommentContainer extends Component {

  state = {
    author: this.props.username,
    comment: '',
    productId: this.props.product.id,
    token: this.state
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addComment(this.state)
    this.setState({
      comment: ''
    })
  }

  render() {
    return (<CreateCommentForm 
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      token={this.props.token}
      username={this.props.username}
    />
    )
  }
}

const mapStateToProps = state => ({
  comment: state.comment,
  product: state.product,
  token: state.user,
  username: state.username
})

export default connect(mapStateToProps, {addComment})(CreateCommentContainer)