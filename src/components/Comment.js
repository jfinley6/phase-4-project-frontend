import React from "react";

function Comment({ comment, user, handleDelete }) {
  return (
    <div className="container border-bottom mb-2">
      <div className="row bootstrap snippets bootdeys">
        <div className="col-md-8 col-sm-12">
          <div className="comment-wrapper">
            <ul className="media-list">
              <li className="media mb-0">
                <img src={comment.user.picture} alt="" className="img-circle" />
                <div className="media-body">
                  <span className="text-muted pull-right">
                    <strong>{comment.user.username} | </strong>
                  </span>
                  <small>{comment.created_at.slice(0, 10)} | </small>
                  {user.id === comment.user_id ? (
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  ) : null}
                  <p>{comment.body}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
