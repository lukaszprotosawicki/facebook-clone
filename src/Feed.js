import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        message="działa"
        timestamp="this is a timestamp"
        username="lucaretttttti"
        image="https://images.unsplash.com/photo-1610962895729-2975a9717fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
