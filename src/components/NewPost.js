import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function NewPost({
  setStoredPost,
  storedPost,
  setStoredSubject,
  storedSubject,
  user
}) {
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState("");
  const [imgFile, setImgFile] = useState({});

  const history = useHistory()

  useEffect(() => {
    setValue(storedPost);
    setSubject(storedSubject);
  }, []);

  function handleSubjectChange(data) {
    setSubject(data.target.value);
    setStoredSubject(data.target.value);
  }

  function handleChange(data) {
    setValue(data);
    setStoredPost(data);
  }

  function handleClear() {
    setValue("");
    setSubject("");
    setStoredPost("");
    setStoredSubject("");
  }


  function handleSubmit() {
    axios.post("http://localhost:3001/posts", 
    {
      post: {
        subject: subject,
        body: value,
        image_url: imgFile,
        user_id: user.id
      },
    },
        { withCredentials: true }
    ).then(() => {
      handleClear()
      history.push("/")
    })
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 d-flex flex-column align-items-center">
        <h2 className="mt-1">Create Post</h2>
        <div className="w-75 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control w-75"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleSubjectChange}
            value={subject}
          ></input>
          <label type="email" className="form-label" htmlFor="exampleimage1">
            Image URL
          </label>
          <input
            onChange={(e) => setImgFile(e.target.value)}
            id="exampleimage1"
            className="form-control w-75"
          />
          <div id="img-preview"></div>
        </div>
        <div className="w-75 bg-white">
          <ReactQuill
            className="w-100"
            theme="snow"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="mt-5 mx-2 btn btn-primary">
            Submit
          </button>
          <button onClick={handleClear} className="mt-5 btn btn-outline-danger">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
