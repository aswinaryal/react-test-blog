import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Axios from 'axios';
import Post from './post';



class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            comments: [],
            post: {}
        }
        this.btnClick = this.btnClick.bind(this);
        this.getPost = this.getPost.bind(this);
    }


    componentWillMount(){
        Axios.get('https://react-blogbackend.herokuapp.com/api/post')
        .then(function(response){
            this.setState({
                posts: response.data,
            },function(){})
        }.bind(this))
    };


    btnClick(){
        console.log(12);
    }

    getPost(id){
        // console.log(id)//will continue tommorow
        const postid = parseInt(id);
        const post = this.state.posts.find(function(post){
            return post.id === postid;
        })
        const post_comment = post.comment.map(function(comment){
            return comment;
        })
        
        this.setState({
            post: {post},
            comments: [post_comment]
        },function(){
            console.log(this.state.comments)
        })
        
        console.log("heyhey");
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path = "/" exact render = {(props)=><Post posts = {this.state.posts} spost = {this.getPost.bind(this)} /> } />
                </Switch>
            </div>
        );
    }
}

export default Index;