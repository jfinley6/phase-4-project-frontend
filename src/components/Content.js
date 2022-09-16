import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import PostCard from "./PostCard";

function Content({ loggedInStatus, user }) {
  const history = useHistory();
  const [post, setPost] = useState([]);

  function handleDelete(id) {
    axios.delete(`http://localhost:3001///posts/${id}`).then(() => {
      setPost((post) => post.filter((item) => id !== item.id));
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001///posts")
      .then((response) => response.json())
      .then((postArr) => setPost(postArr));
  }, []);

  const allPosts = post.map((post) => {
    return (
      <PostCard
        user={user}
        post={post}
        key={post.id}
        setPost={setPost}
        logged_in={logged_in}
        handleDelete={handleDelete}
      />
    );
  });

  function logged_in() {
    if (loggedInStatus === "NOT_LOGGED_IN") {
      history.push("/home");
    }
  }

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-around">{allPosts}</div>
    </div>
    // <button onClick={logged_in} className='btn btn-primary d-flex justify-content-center'>Content</button>
  );
}

export default Content;
