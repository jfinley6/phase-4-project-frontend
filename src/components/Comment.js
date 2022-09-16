import React from "react";

function Comment({ comment }) {

  return (
    <div className="container border-bottom mb-2">
      <div className="row bootstrap snippets bootdeys">
        <div className="col-md-8 col-sm-12">
          <div className="comment-wrapper">
            <ul className="media-list">
              <li className="media mb-0">
                  <img
                    src={comment.user.picture}
                    alt=""
                    className="img-circle"
                  />
                <div className="media-body">
                  <span className="text-muted pull-right">
                    <strong >
                      {comment.user.username} |{" "}
                    </strong>
                  </span>
                  <small>
                    {comment.created_at.slice(0, 10)}
                  </small>
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
