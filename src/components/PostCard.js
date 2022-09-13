import React from "react";

function PostCard({ post }) {
  return (
    <div className="col-sm-3 d-flex justify-content-center align-items-center flex-column border mb-3">
      <img
        src={post.image_url}
        className="card-img-top mt-3 w-50 h-50"
        alt="..."
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{post.subject}</h5>
        <p className="card-text">
          <small className="text-muted">
            Created at: {post.created_at.slice(0, -14)}
          </small>
        </p>
        {/* <p className="card-text">
          <small className="text-muted">
            0 likes | 0 comments
          </small>
        </p> */}
        <button className="btn btn-primary">Read</button>
      </div>
    </div>
  );
}

export default PostCard;
