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
  }, [id]);


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
              <div className="panel-heading">Comments</div>
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
