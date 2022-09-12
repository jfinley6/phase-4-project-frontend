import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import PostCard from './PostCard'

function Content({loggedInStatus}) {
  const history = useHistory()
  const [post, setPost]= useState([])

  useEffect(() =>{
    fetch("http://localhost:3001/posts").then((response) => response.json()).then(postArr => setPost(postArr))
  },[])

  const allPosts = post.map((post) =>{
    return(
      <PostCard post={post} key={post.id}/>
    )
  })

  function logged_in() {
    if (loggedInStatus === "NOT_LOGGED_IN") {
      history.push("/home")
    }
  }

  return (
        <div className='d-flex flex-column mt-3'>
          {allPosts}
        </div>
    // <button onClick={logged_in} className='btn btn-primary d-flex justify-content-center'>Content</button>
    
  )
}

export default Content