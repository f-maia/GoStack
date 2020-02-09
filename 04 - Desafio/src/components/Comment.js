import React from "react";

const Comment = ({ data }) => {
  const { author, content } = data;

  return (
    <div className="comment">
      <img className="avatar" src={author.avatar} alt="avatar" />
      <p>
        <span>{author.name}</span>
        {content}
      </p>
    </div>
  );
};

export default Comment;
