import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const fetchPostsStart = () => ({
  type: actionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts,
});

export const fetchPostsFail = error => ({
  type: actionTypes.FETCH_POSTS_FAIL,
  error,
});

export const fetchPosts = () => (dispatch) => {
  axios
    .get('/posts')
    .then(response => dispatch(fetchPostsSuccess(response.data)))
    .catch(error => dispatch(fetchPostsFail(error)));
};
