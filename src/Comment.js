import React from 'react'

function Comment({comment}) {
  return (
    <div class="container">
<div class="row bootstrap snippets bootdeys">
    <div class="col-md-8 col-sm-12">
        <div class="comment-wrapper">
            {/* <div class="panel panel-info">
                <div class="panel-heading">
                    Comment panel
                </div>
                <div class="panel-body">
                    <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                    <br/>
                    <button type="button" class="btn btn-info pull-right">Post</button>
                    <div class="clearfix"></div>
                    <hr/> */}
                    <ul class="media-list">
                        <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">{comment.created_at}</small>
                                </span>
                                <strong class="text-success">@MartinoMont</strong>
                                <p>{comment.body}</p>
                            </div>
                        </li>
                        </ul>
                </div>
            </div>
        </div>

    </div>
// </div>
// </div>
                        
  )
}

export default Comment