import React from 'react';
import { string, func } from 'prop-types';

import './Post.css';

const Post = ({ titleBlog, authorBlog, clickedBlog }) => (
  <article className="Post" onClick={clickedBlog}>
    <h1>
      Tittle:
      {titleBlog}
    </h1>

    <div className="Info">
      <div className="Author">
        Author:
        {authorBlog}
      </div>
    </div>
  </article>
);

Post.propTypes = {
  titleBlog: string.isRequired,
  authorBlog: string.isRequired,
  clickedBlog: func.isRequired,
};

export default Post;
