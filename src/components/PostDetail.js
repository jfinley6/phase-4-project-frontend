import React, { useState, useEffect } from "react";
import { useParams, useHistory, Redirect } from "react-router";
import axios from "axios";
import "../style/PostDetail.css";
import Comment from "./Comment";

function PostDetail({user, loggedInStatus}) {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  const [username, setUserName] = useState({});
  const[newComment, setNewComment] = useState("");
  const history = useHistory()

  const [picture, setPicture] = useState("")

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setPost(response.data);
        setComment(response.data.comments);
        setUserName(response.data.user)
        setPicture(response.data.user.picture)
      });
  }, [id, comment]);

  function handleChange(e){
        setNewComment(e.target.value);
  }

  function handleClear(){
    setNewComment("");
  }

  function handleSubmit(event){
    event.preventDefault()
    axios.post("http://localhost:3001/comments",
    {
        comment: {
            body: newComment,
            user_id: user.id,
            post_id: post.id
        },
    },
    { withCredentials: true }
    ).then(() => {
      handleClear();
      axios.get(`http://localhost:3001/posts/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        
        setComment(response.data.comments);
      }).then(() => {
        document.getElementById("commentButton").scrollIntoView({
          behavior: "smooth",
        });

      })

    })
  }

  function goToComments() {
    document.getElementById("comments").scrollIntoView({
      behavior: "smooth",
    });
  }

  const allComment = comment.map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });

  return (
    <div className="blog-single gray-bg d-flex justify-content-center pt-0">
      <div className="container">
        <div className="row align-items-start flex-d justify-content-center">
          <div className="col-lg-8 m-15px-tb">
            <article className="article d-flex flex-column text-center">
              <div className="article-img">
                <img
                  className="h-50 w-75"
                  src={post.image_url}
                  title=""
                  alt=""
                />
              </div>
              <div className="article-title">
                <h1 className="d-flex flex-column align-items-start">
                  {post.subject}
                </h1>
                <div className="media">
                  <div className="avatar">
                    <img src={picture} title="" alt="" />
                  </div>
                  <div className="media-body d-flex flex-column align-items-start">
                    <label>{username.username}</label>
                    <span>
                      {post.created_at != undefined
                        ? post.created_at.slice(0, 10)
                        : null}
                    </span>
                    <button onClick={goToComments} className="btn btn-outline-primary">
                      <span>
                        {post.comments === undefined ? null : post.comments.length} comments
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="article-content">
                <div
                  className="d-flex flex-column align-items-start"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></div>
              </div>
            </article>
            <div className="panel panel-info">
              <div id="comments" className="panel-heading">Comments</div>
              <div className="panel-body">
                <form onSubmit={handleSubmit}>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Write a comment..."
                    rows="3"
                    value={newComment}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <br />
                  {loggedInStatus == "NOT_LOGGED_IN" ? (
                    "Please Login to Comment"
                  ) : (
                    <button
                      type="submit"
                      id="commentButton"
                      className="btn btn-info pull-right"
                    >
                      Post
                    </button>
                  )}
                </form>
                <div className="clearfix"></div>
                <hr />
              </div>
            </div>
            <div>{allComment}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
