// src/components/Forum.jsx
import React, { useState, useEffect } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/forum");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async () => {
    if (postText) {
      try {
        const response = await fetch("http://localhost:5000/api/forum", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: postText }),
        });
        const newPost = await response.json();
        setPosts([newPost, ...posts]);
        setPostText("");
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  const addComment = async (postId, comment) => {
    if (!comment) return;
    try {
      const response = await fetch(`http://localhost:5000/api/forum/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });
      const updatedPost = await response.json();
      setPosts(posts.map((p) => (p._id === postId ? updatedPost : p)));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="content">
      <h2> Student Forum</h2>
      <div className="event-form">
        <textarea
          placeholder="Share your thoughts..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button onClick={addPost}>Post</button>
      </div>

      <div className="forum-section">
        {posts.map((post) => (
          <div key={post._id} className="forum-post">
            <p><strong>Post:</strong> {post.text}</p>
            <div className="comment-section">
              <h4>Comments:</h4>
              {post.comments.map((c) => (
                <p key={c._id}>• {c.text}</p>
              ))}
              <input
                type="text"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addComment(post._id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
