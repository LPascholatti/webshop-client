import React from 'react'

export default function CreateCommentForm(props) {
  const { onSubmit, onChange, values, token } = props;

  return (
    token !== "" && <div className="createComment">
      <h3>Comment:</h3>
      <form onSubmit={onSubmit}>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            onChange={onChange}
            value={values.comment}
            placeholder="author"
          />
        </label>
      <input type="submit"/>
      </form>
    </div>
  )
}