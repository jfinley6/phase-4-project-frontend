import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewPost({setStoredPost, storedPost, setStoredSubject, storedSubject}) {
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setValue(storedPost)
    setSubject(storedSubject)
  },[])


  function handleSubjectChange(data) {
    setSubject(data.target.value);
    setStoredSubject(data.target.value);
  }

  function handleChange(data) {
    setValue(data)
    setStoredPost(data)
  }

  function handleClear() {
    setValue("")
    setSubject("")
    setStoredPost("")
    setStoredSubject("")
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
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleSubjectChange}
            value={subject}
          ></input>
        </div>
        <ReactQuill
          className="w-100 mb-1"
          theme="snow"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleClear} className="mt-5 btn btn-outline-danger">Clear All</button>
      </div>
    </div>
  );
}

export default NewPost;
