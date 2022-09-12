import React from 'react'

function PostCard({post}) {
  return (
    <div className="card-group">
      <img className="card-img-top" src={post.image_url} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{post.subject}</h5>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
 
  )
}

export default PostCard