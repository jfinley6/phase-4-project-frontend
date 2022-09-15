import React from "react";
import {Link} from "react-router-dom"

function PostCard({ post, user, handleDelete }) {

  return (
    <div className="col-sm-3 d-flex justify-content-center border-dark align-items-center flex-column border mb-3 shadow-lg rounded">
      <img
        src={post.image_url}
        className="card-img-top mt-3 w-50 h-50"
        alt="..."
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title mb-0">{post.subject}</h5>
        <h6 className="card-title link-primary btn mb-0">{post.user.username}</h6>
        <p className="card-text mb-1">
          <small className="text-muted">
            Created: {post.created_at.slice(0, -14)}
          </small>
        </p>
        <div>
          <Link className="btn btn-primary mx-1" to={`/posts/${post.id}`}>
            Read
          </Link>
          {user.id === post.user_id ? <button onClick={() => {
            handleDelete(post.id)
          }} className="btn btn-danger">
            Delete
          </button> : null}
          
        </div>
      </div>
    </div>
  );
}

export default PostCard;
