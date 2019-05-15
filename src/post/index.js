import React,{lazy,Suspense} from 'react';
import {Switch,Route} from 'react-router-dom';
import Axios from 'axios';
import ShowPost from './showpost';
// import Post from './post';
const Post = lazy(()=>import('./post'));
// const Post = lazy(function(){
//     return import('./post');
// })

// const routes = [
//    {
//     component : Post,
//     path : "/post",
//     exact: true
//    }
// ];


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : [],
        }
    }


    componentWillMount(){
        Axios.get('http://127.0.0.1:8000/api/post')
        .then(function(response){
            this.setState({
                posts: response.data,
            },function(){
                // console.log(this.state.posts)//for getting immediate access to this.state.whateveryouwannaget
                // this.state.posts.find(function(post){
                //     return //no idea how to call componentWM without rerequest
                // })
            })
        }.bind(this))
    };

    getPost(id){
        console.log(id)//we will continue tommorow
        console.log("heyhey");
    }

    render(){
        return(
            <div>
                <Suspense fallback = {<div>loading.....</div>} >
                <Switch>
                    <Route path = "/" exact render = {(props)=><Post posts = {this.state.posts} spost = {this.getPost} /> } />
                    <Route path = "/post" render = {function(props){
                        return <ShowPost post = {this.state.post} />
                    }} />
                </Switch>
                   {/* <Post post = {this.state.posts} /> */}
                </Suspense>
            </div>
        );
    }
}

export default Index;