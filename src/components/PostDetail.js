import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../style/PostDetail.css";
import Comment from "./Comment";

function PostDetail() {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  const [username, setUserName] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setPost(response.data);
        setComment(response.data.comments);
        setUserName(response.data.user)
      });
  }, [id]);

  const allComment = comment.map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });

  return (
    <div className="blog-single gray-bg">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            <article className="article">
              <div className="article-img">
                <img src={post.image_url} title="" alt="" />
              </div>
              <div className="article-title">
                <h2>{post.subject}</h2>
                <div className="media">
                  <div className="avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      title=""
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <label>{username.username}</label>
                    <span>{post.created_at}</span>
                  </div>
                </div>
              </div>
              <div className="article-content">
                <p>{post.body}</p>
              </div>
              <div className="nav tag-cloud">
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Travel</a>
                <a href="#">Web Design</a>
                <a href="#">Marketing</a>
                <a href="#">Research</a>
                <a href="#">Managment</a>
              </div>
            </article>
            <div className="panel panel-info">
              <div className="panel-heading">Comment panel</div>
              <div className="panel-body">
                <textarea
                  className="form-control"
                  placeholder="write a comment..."
                  rows="3"
                ></textarea>
                <br />
                <button type="button" className="btn btn-info pull-right">
                  Post
                </button>
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
