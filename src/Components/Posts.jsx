import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PostsStyle from "./Posts.module.css"

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });
      }, []);

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
    
      return (
        <>
        <div className={PostsStyle.searchBox}>
            <input value={searchTerm} type="text" placeholder="Search Post" onChange={handleSearch}></input>
        </div>
        <div className={PostsStyle.container}>
          <h1 className={PostsStyle.top}>Post</h1>
          <ul>
          {posts.filter((post)=> {
            if(searchTerm == ""){
              return post
            }else if(post.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return post
            }
          }).map((post) => (
            <div className={PostsStyle.content}>
             <Link to={`/posts/${post.id}`}> <li>{post.title}</li></Link>
            </div>
          ))}
          </ul>
        </div>
        </>
      );
}

export default Post
