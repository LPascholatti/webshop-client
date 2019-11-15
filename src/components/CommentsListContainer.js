import React, { Component } from 'react'
import { loadComments } from '../actions'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'

class CommentsListContainer extends Component {

  componentDidMount() {
    this.props.loadComments()
  }

  render() {
    console.log("this.props.comments:", this.props.comments)
    return <CommentsList comments={this.props.comments} product={this.props.product} />
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  product: state.product
})

export default connect(mapStateToProps, {loadComments})(CommentsListContainer)