import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import "../style/PostDetail.css";
import Comment from "./Comment";

function PostDetail({user}) {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  const [username, setUserName] = useState({});
  const[newComment, setNewComment] = useState("");

  const history = useHistory()

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

  function handleChange(e){
        setNewComment(e.target.value);
  }

  function handleClear(){
    setNewComment("");
  }

  function handleSubmit(){
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
    })
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
                <img src={post.image_url} title="" alt="" />
              </div>
              <div className="article-title">
                <h1 className="d-flex flex-column align-items-start">
                  {post.subject}
                </h1>
                <div className="media">
                  <div className="avatar">
                    <img
                      src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
                      title=""
                      alt=""
                    />
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
                <div className="d-flex flex-column align-items-start" dangerouslySetInnerHTML={{__html: post.body}}></div>
              </div>
              {/* <div className="nav tag-cloud">
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Travel</a>
                <a href="#">Web Design</a>
                <a href="#">Marketing</a>
                <a href="#">Research</a>
                <a href="#">Managment</a>
              </div> */}
            </article>
            <div className="panel panel-info">
              <div className="panel-heading">Comment panel</div>
              <div className="panel-body">
                <textarea
                  className="form-control"
                  placeholder="write a comment..."
                  rows="3"
                  value={newComment}
                  onChange={handleChange}
                ></textarea>
                <br />
                <button type="button" onClick= {handleSubmit} className="btn btn-info pull-right">
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
