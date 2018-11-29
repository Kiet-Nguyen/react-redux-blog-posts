import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  func,
  string,
  arrayOf,
  object,
} from 'prop-types';

import Post from '../../components/Post/Post';
import './Posts.css';
import * as actions from '../../store/actions/post';

class Posts extends Component {
  componentDidMount = () => {
    const { onFetchPosts } = this.props;
    onFetchPosts();
  };

  // postSelectedHandler = id => {
  //   this.setState({ selectedPostId: id });
  // }

  render() {
    const { error, posts } = this.props;

    let receivedPosts = <p>{error}</p>;
    if (posts) {
      receivedPosts = posts.map((post) => {
        const { title, author, id } = post;
        return <Post key={id} titleBlog={title} authorBlog={author} />;
      });
    }

    return <section className="Posts">{receivedPosts}</section>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: () => dispatch(actions.fetchPosts()),
});

Posts.propTypes = {
  onFetchPosts: func.isRequired,
  error: string,
  posts: arrayOf(object).isRequired,
};

Posts.defaultProps = {
  error: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
