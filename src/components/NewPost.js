import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewPost({setStoredPost, storedPost}) {
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setStoredPost(value)
  },[value])

  console.log(storedPost)

  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 d-flex flex-column align-items-center">
        <h2>Create Post</h2>
        <div className="w-75 mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={setSubject}
            ></input>
        </div>
        <ReactQuill
          className="w-100"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}

export default NewPost;
