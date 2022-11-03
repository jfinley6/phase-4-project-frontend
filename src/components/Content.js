import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PostCard from "./PostCard";

function Content({ loggedInStatus, user }) {
  const history = useHistory();
  const [post, setPost] = useState([]);

  function handleDelete(id) {
    axios.delete(`https://mysite-ll4a.onrender.com/posts/${id}`).then(() => {
      setPost((post) => post.filter((item) => id !== item.id));
    });
  }

  useEffect(() => {
    fetch("https://mysite-ll4a.onrender.com/posts")
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
    <div className="container mt-3 d-flex justify-content-center">
      <div className="row d-flex justify-content-evenly w-100">{allPosts}</div>
    </div>
  );
}

export default Content;
