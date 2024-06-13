// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import './App.css';

const App = () => {
    // src/data.js
  const blogPosts = [
      {
          title: "Understanding Flexbox",
          date: "March 15, 2024",
          author: "Jane Doe",
          image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWN0fGVufDB8fHx8MTY1MzE1NDk1MQ&ixlib=rb-1.2.1&q=80&w=600",
          body: "Flexbox is a powerful layout module that gives you control over the alignment, direction, and order of your content."
      },
      {
          title: "Getting Started with React",
          date: "April 10, 2024",
          author: "John Smith",
          image: "https://reactjs.org/logo-og.png",
          body: "React is a popular JavaScript library for building user interfaces. It allows you to create reusable UI components."
      },
      {
          title: "CSS Grid vs Flexbox",
          date: "May 5, 2024",
          author: "Alice Johnson",
          image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*qADk7wSD1RSCbwBV.png",
          body: "CSS Grid and Flexbox are both powerful layout systems in CSS, but they serve different purposes. Here's a comparison."
      },
      {
          title: "JavaScript ES6 Features",
          date: "June 20, 2024",
          author: "Bob Brown",
          image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGphdmFzY3JpcHR8ZW58MHx8fHwxNjUzMTU0OTY5&ixlib=rb-1.2.1&q=80&w=600`",
          body: "ES6 introduced many new features to JavaScript, including arrow functions, template literals, and destructuring."
      }
  ];


    return (
        <div className="container">
            <TopBar />
            <main className="blog-posts">
                {blogPosts.map((post, index) => (
                    <BlogPost 
                        key={index}
                        title={post.title}
                        date={post.date}
                        author={post.author}
                        image={post.image}
                        body={post.body}
                    />
                ))}
            </main>
        </div>
    );
};

export default App;

