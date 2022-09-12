import React from 'react'

function PostCard({post}) {
  return (
    <div className="card-group d-flex justify-content-center align-items-center flex-column">
      <img className="img-fluid w-25" src={post.image_url} alt="Card image cap"/>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{post.subject}</h5>
        <p className="card-text"><small className="text-muted">Created At: {post.created_at.slice(0, -14)}</small></p>
        <button onClick={() => {
          console.log(post.id)
        }} className='btn btn-primary'>Read</button>
      </div>
    </div>
 
  )
}

export default PostCard