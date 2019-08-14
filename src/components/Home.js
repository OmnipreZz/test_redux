import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    const { posts } = this.props;
    const postData = posts.length ? (
      posts.map( post => {
        return (
          <div className="base" key={post.id}>
            <Link to={"/" + post.id}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        )
      })
    ) : (
      <p>Aucun article pour le moment</p>
    );
    return(
      <div className="home">
        <h4>Page d'accueil</h4>
        {postData}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);