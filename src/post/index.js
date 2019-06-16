import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Post from './post';



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            post: {}
        }
        // this.btnClick = this.btnClick.bind(this);
        // this.getPost = this.getPost.bind(this);
    }


    componentWillMount() {
        Axios.get('https://react-blogbackend.herokuapp.com/api/post')
            .then(response => {
                console.log('response', response.data)
                return this.setState({ posts: response.data })
            })
            .catch(err => console.log(err))
    };

    componentWillUnmount() {

    }

    // getPost(id) {
    //     // console.log(id)//will continue tommorow
    //     const postid = parseInt(id);
    //     console.log('post id => ', postid);
    //     const post = this.state.posts.find(function (post) {
    //         return post.id === postid;
    //     })

    //     const post_comment = post.comment.map(function (comment) {
    //         return comment;
    //     })

    //     this.setState({
    //         post: { post },
    //         comments: [post_comment]
    //     });

    //     console.log("heyhey");
    // }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => <Post posts={this.state.posts} />}></Route>
                </Switch>
            </div>
        );
    }
}

export default Index;