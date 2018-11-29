import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const formattedReceivedPostsData = (receivedData) => {
  const numberOfPosts = receivedData.slice(0, 20);
  const updatedPosts = numberOfPosts.map((post) => {
    let data;
    if (post.userId === 1) {
      data = {
        ...post,
        author: 'Kiet',
      };
    }
    if (post.userId === 2) {
      data = {
        ...post,
        author: 'Bangbang',
      };
    }
    return data;
  });
  return updatedPosts;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_POSTS_START:
    return {
      ...state,
      loading: true,
      error: null,
    };

  case actionTypes.FETCH_POSTS_SUCCESS:
    return {
      ...state,
      posts: formattedReceivedPostsData(action.posts),
      loading: false,
      error: null,
    };

  case actionTypes.FETCH_POSTS_FAIL:
    return {
      ...state,
      loading: false,
      error: action.error,
    };

  default:
    return state;
  }
};

export default reducer;
