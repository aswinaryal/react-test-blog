import React from 'react';
import {Link} from 'react-router-dom';

function Post(props){

    function handleClick(event){
        const postid = parseInt(event.target.getAttribute("postid"));
         props.spost(postid);
    }

    console.log(props)
    return(
        <>{props.posts.map(function(post){
            return  <div key = {post.id} >
                        <Link to = "/post" ><label><h3 onClick = {handleClick}  postid = {post.id} >{post.title}</h3></label></Link>
                        <p>{post.body.substring(0,350)}....</p>
                    </div>
            })
        }</>
    );
}

export default Post;