import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, user, handleDelete }) {
  return (

      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
        <div className="card d-flex">
          <img className="card-img mx-auto mt-3" style={{width: "200px", height: "150px", objectFit: "cover"}} src={post.image_url} alt="Bologna" />
          <div style={{textAlign: "center"}} className="card-body pb-2">
            <h6 className="card-title">{post.subject}</h6>
            <strong className="text-muted cat mx-3">{post.user.username}</strong>
            <p className="card-text"></p>
            <Link className="btn btn-primary mx-1" to={`/posts/${post.id}`}>
              Read
            </Link>
            {user.id === post.user_id ? (
              <button
                onClick={() => {
                  handleDelete(post.id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            ) : null}
          </div>
          <div style={{textAlign: "center"}} className="card-footer text-muted d-flex justify-content-center bg-transparent border-top-0">
            <div className="views">Created: {post.created_at.slice(0, -14)}</div>
          </div>
        </div>
      </div>
  );
}

export default PostCard;
