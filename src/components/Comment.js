import React from "react";

function Comment({ comment }) {
  return (
    <div className="container border-bottom mb-2">
      <div className="row bootstrap snippets bootdeys">
        <div className="col-md-8 col-sm-12">
          <div className="comment-wrapper">
            <ul className="media-list">
              <li className="media mb-0">
                <a href="#" className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/user_1.jpg"
                    alt=""
                    className="img-circle"
                  />
                </a>
                <div className="media-body">
                  <span className="text-muted pull-right">
                    <small className="text-muted">
                      {comment.created_at.slice(0, 10)} |{" "}
                    </small>
                  </span>
                  <strong className="text-success">
                    {comment.user.username}
                  </strong>
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
