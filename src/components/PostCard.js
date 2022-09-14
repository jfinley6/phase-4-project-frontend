import React from "react";
import {Link} from "react-router-dom"
import User from "./User";

function PostCard({ post }) {

  return (
    <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column border mb-3 shadow rounded">
      <img
        src={post.image_url}
        className="card-img-top mt-3 w-50 h-50"
        alt="..."
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{post.subject}</h5>
        <h6 className="card-title link-primary btn">{post.user.username}</h6>
        <p className="card-text">
          <small className="text-muted">
            Created: {post.created_at.slice(0, -14)}
          </small>
        </p>
        <Link className="btn btn-primary" to={`/posts/${post.id}`}>
          Read
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
