import React from "react";

<<<<<<< HEAD
function PostCard() {
  return (
    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
=======
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
>>>>>>> main
      </div>
    </div>
  );
}

export default PostCard;
