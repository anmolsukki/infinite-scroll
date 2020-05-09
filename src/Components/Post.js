import React from "react";

const Post = (props) => (
    <div className="post">
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.email}</div>
        <div>{props.body}</div>
    </div>
)

export default Post;
