import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import '../style/PostDetail.css'
import Comment from '../Comment';

function PostDetail() {
        const [ post, setPost] = useState({});
        const[comment, setComment] = useState([])
        const { id } = useParams();

        useEffect(() => {
            // fetch(`/posts/${id}`).then((r) =>  {
            //     r.json().then((post) =>
            //       setPost(post)
            //     );
               
            // });
            axios.get(`http://localhost:3001/posts/${id}`, {
              withCredentials: true,
            }).then(response => {setPost(response.data)
            setComment(response.data.comments)})
          }, [id]);


          console.log(comment)
            
            const allComment = comment.map((comment) => {
                return <Comment comment={comment} key={comment.id} />;
            })

        //   const comment = post.comments

        //   const allComments = post.comments.map((comment) =>{
        //     return  <Comment comment={comment} key={comment.id} />
        //   })

        //   const allComments = post.comments.map((comments) =>{
        //     return <p>{comments.body}</p>
        //   })
        
        // const fetchPost = async () => {
        //     const res = await fetch(`/posts/${id}`)
        //     console.log(res)
        //     if (res.ok) {
        //         const postJSON = await res.json()
        //         setPost({data: postJSON, error: null, status: "resolved"})
        //         console.log("Success")
        //     } else {
        //         const postErr = await res.json()
        //         setPost({data: null, error: postErr, status: "rejected"})
        //         console.log("failed")
        //     }
        // }   

        

        // useEffect(() => {
        //     fetchPost()
        //         .catch(console.error)
        //   }, [id])

          
  return (
    <div className="blog-single gray-bg">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-8 m-15px-tb">
                    <article className="article">
                        <div className="article-img">
                            <img src={post.image_url} title="" alt=""/>
                        </div>
                        <div className="article-title">
                            {/* <h6><a href="#">Lifestyle</a></h6> */}
                            <h2>{post.subject}</h2>
                            <div className="media">
                                <div className="avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt=""/>
                                </div>
                                <div className="media-body">
                                    <label>Rachel Roth</label>
                                    <span>{post.created_at}</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                            {/* <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                            <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                            <h4>What are my payment options?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p className="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                        <p>{post.body}</p>
                        </div>
                        <div className="nav tag-cloud">
                            <a href="#">Design</a>
                            <a href="#">Development</a>
                            <a href="#">Travel</a>
                            <a href="#">Web Design</a>
                            <a href="#">Marketing</a>
                            <a href="#">Research</a>
                            <a href="#">Managment</a>
                        </div>
                    </article>
                    <div class="panel panel-info">
                <div class="panel-heading">
                    Comment panel
                </div>
                <div class="panel-body">
                    <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                    <br/>
                    <button type="button" class="btn btn-info pull-right">Post</button>
                    <div class="clearfix"></div>
                    <hr/>
                    </div>
                    </div>
                    <div>{allComment}</div>
                    {/* <div class="container">
<div class="row bootstrap snippets bootdeys">
    <div class="col-md-8 col-sm-12">
        <div class="comment-wrapper">
            <div class="panel panel-info">
                <div class="panel-heading">
                    Comment panel
                </div>
                <div class="panel-body">
                    <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                    <br/>
                    <button type="button" class="btn btn-info pull-right">Post</button>
                    <div class="clearfix"></div>
                    <hr/>
                    <ul class="media-list">
                        <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <strong class="text-success">@MartinoMont</strong>
                                <p>{post.comments}</p>
                            </div>
                        </li> */}
                        {/* <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <strong class="text-success">@LaurenceCorreil</strong>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                </p>
                            </div>
                        </li> */}
                        {/* <li class="media">
                            <a href="#" class="pull-left">
                                <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle"/>
                            </a>
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                <strong class="text-success">@JohnNida</strong>
                                <p>
                                    Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </li> */}
                    {/* </ul>
                </div>
            </div>
        </div>

    </div>
</div>
</div> */}
                    {/* <div className="contact-form article-comment">
                        <h4>Leave a Reply</h4>
                        <form id="contact-form" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="send">
                                        <button className="px-btn theme"><span>Submit</span> <i className="arrow"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
                {/* <div className="col-lg-4 m-15px-tb blog-aside"> */}
                    {/* <!-- Author --> */}
                    {/* <div className="widget widget-author">
                        <div className="widget-title">
                            <h3>Author</h3>
                        </div>
                        <div className="widget-body">
                            <div className="media align-items-center">
                                <div className="avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title="" alt=""/>
                                </div>
                                <div className="media-body">
                                    <h6>Hello, I'm<br/> Rachel Roth</h6>
                                </div>
                            </div>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
                        </div>
                    </div> */}
                    {/* <!-- End Author -->
                    <!-- Trending Post --> */}
                    {/* <div className="widget widget-post">
                        <div className="widget-title">
                            <h3>Trending Now</h3>
                        </div>
                        <div className="widget-body">

                        </div>
                    </div> */}
                    {/* <!-- End Trending Post -->
                    <!-- Latest Post --> */}
                    {/* <div className="widget widget-latest-post">
                        <div className="widget-title">
                            <h3>Latest Post</h3>
                        </div>
                        <div className="widget-body">
                            <div className="latest-post-aside media">
                                <div className="lpa-left media-body">
                                    <div className="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div className="lpa-meta">
                                        <a className="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a className="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div className="lpa-right">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="latest-post-aside media">
                                <div className="lpa-left media-body">
                                    <div className="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div className="lpa-meta">
                                        <a className="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a className="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div className="lpa-right">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="latest-post-aside media">
                                <div className="lpa-left media-body">
                                    <div className="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div className="lpa-meta">
                                        <a className="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a className="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div className="lpa-right">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- End Latest Post -->
                    <!-- widget Tags --> */}
                    {/* <div className="widget widget-tags">
                        <div className="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div className="widget-body">
                            <div className="nav tag-cloud">
                                <a href="#">Design</a>
                                <a href="#">Development</a>
                                <a href="#">Travel</a>
                                <a href="#">Web Design</a>
                                <a href="#">Marketing</a>
                                <a href="#">Research</a>
                                <a href="#">Managment</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- End widget Tags --> */}
                </div>
            </div>
        </div>
        {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
<div class="container">
<div class="row">
    <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description"/>
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
              </div>
        
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
        
              <ul class="list-inline d-sm-flex my-0">
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                    178
                  </a>
                </li>
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    34
                  </a>
                </li>
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </div>

    <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Image Description"/>
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span>
              </div>
        
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
        
              <ul class="list-inline d-sm-flex my-0">
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                    178
                  </a>
                </li>
                <li class="list-inline-item g-mr-20">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    34
                  </a>
                </li>
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </div>
</div>
</div> */}
    </div>
  )
}

export default PostDetail