import React from 'react';

class ShowPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {
                comment: [{
                    id:''
                }],
            }
        }
    }

    componentDidMount() {
        const { post } = this.props.location.state;
        this.setState({ post: post }, () => {
            console.log('posts', post)
        });

    }
    render() {
        return (

            <div>
                <h2>{this.state.post.title}</h2>
                <h3>{this.state.post.body}</h3>
                <hr></hr>
                <p>
                    Comments
                </p>
                {this.state.post.comment.length > 0 ? (this.state.post.comment.map((item) => <li key={item.id}>{item.body}</li>)) : ("There are no any comments for this posts")}

            </div>
        )
    }
}

export default ShowPost;