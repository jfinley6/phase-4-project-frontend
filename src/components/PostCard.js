import React from "react";

function PostCard({ post }) {
  return (
    // <div className="card d-flex justify-content-center align-items-center flex-column">
    //   <img className="h-50 w-50" src={post.image_url} alt="Card image cap"/>
    //   <div className="card-body d-flex flex-column align-items-center">
    //     <h5 className="card-title">{post.subject}</h5>
    //     <p className="card-text"><small className="text-muted">Created At: {post.created_at.slice(0, -14)}</small></p>
    //     <button onClick={() => {
    //       console.log(post.id)
    //     }} className='btn btn-primary'>Read</button>
    //   </div>
    // </div>

    <div className="col-sm-3 d-flex flex-column border mb-3">
      <img
        src={post.image_url}
        className="img-responsive card-img-top mt-3 h-50"
        alt="..."
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{post.subject}</h5>
        <p className="card-text">
          <small className="text-muted">
            Created at: {post.created_at.slice(0, -14)}
          </small>
        </p>
        <button className="btn btn-primary">Read</button>
      </div>
    </div>
  );
}

export default PostCard;
