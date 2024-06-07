// src/components/BlogPost.js
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, author, image, body }) => {
    return (
        <article className="blog-post">
            <h2 className="post-title">{title}</h2>
            <p className="post-date">Published on: {date}</p>
            <p className="post-author">By: {author}</p>
            <img src={image} alt={title} className="post-image" />
            <p className="post-body">{body}</p>
            <hr />
        </article>
    );
};

export default BlogPost;
