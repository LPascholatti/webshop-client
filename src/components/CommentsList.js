import React, { Component } from 'react'

export default class CommentsList extends Component {

  renderComments(comments) {
    const { id, author, comment } = comments

    return <li key={id}>
      <p>{`${author}: ${comment}`}</p>
    </li>
  }

  render() {

    const { comments } = this.props
    console.log("COMMENTS:", comments)
    console.log("THIS.PROPS.TICKET:", this.props.product)

    const filterComments = comments.filter(comment => comment.productId === this.props.product.id)
    console.log("FILTER COMMENT:", filterComments)


    return (
      <div className="commentsList">
        <h4>List of Comments:</h4>
        {!comments && 'Loading...'}
        {comments &&
          <ul>{filterComments.map(this.renderComments)}</ul>
        }
        <br />
      </div>
    )
  }
}