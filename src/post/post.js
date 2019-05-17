import React from 'react';
import {Link} from 'react-router-dom';

class Post extends React.Component{
    // console.log(props);
    constructor(){
        super();

        this.showPost = this.showPost.bind(this)
    }

    
     showPost = ()=>{
        console.log(123);
    }

    render(){
        return(
                  <div>
                {this.props.posts.map(function(post){
                    return <div key = {post.id}>
                            <Link to = "/post" >
                                <h3 
                                
                                  post_id = {post.id} >
                                  {post.title}
                                </h3>
                            </Link>
                            <p>{post.body.substring(250)}.....</p> 
                           
                           </div> 
                })}
            </div>
        );
    }

}


export default Post;