import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction'


class Post extends Component {

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push("/")
  }

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleClick}>
          Supprimer l'article
        </button>
      </div>
    ) : (
      <p>L'article n'existe pas</p>
    );
    return(
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}


const mapDispacthToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Post);