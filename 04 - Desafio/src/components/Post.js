import React from "react";

import Comment from "./Comment";

const Post = ({ data }) => {
  const { author, date, content, comments } = data;

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={author.avatar} alt="avatar" />
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-comments">
        <div className="divider" />
        {comments.map(({ id, ...data }) => (
          <Comment key={id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Post;
