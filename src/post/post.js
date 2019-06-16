import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {

    render() {
        return (
            <div>
                    { this.props.posts.map(function (post) {
                            return <div key={post.id}>
                                <Link to={{
                                    pathname: `/post/${post.id}`,
                                    state: {
                                        post
                                    }
                                }}>
                                    <h3>{post.title}</h3>
                                </Link>
                            </div>
                        })
                    }
            </div>
        );
    }

}


export default Post;