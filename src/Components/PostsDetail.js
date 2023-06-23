import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PostsDetailStyle from "./PostsDetail.module.css";
import commentIcon from './commentLogo.jpg';




const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [postComments, setPostComments] = useState([]);
console.log(comments);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });

    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setPostComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  useEffect(() => {
    let val = comments.filter((com) => com.postId == parseInt(id))
    setComments(val)
  },[comments])

  return (
    <div className={PostsDetailStyle.container}>
      <div>
        <p className={PostsDetailStyle.title}>{post.title}</p>
      </div>
      <div className={PostsDetailStyle.idContent}>
        <p>Id: {post.id}</p>
        <p>User Id: {post.userId}</p>
      </div>
      <div className={PostsDetailStyle.postContent}>
        <p>{post.body}</p>
      </div>
      <div>
        <h3>Comments</h3>
        {postComments.map((comment) => (
          <div key={comment.id} className={PostsDetailStyle.commentContainer}>
            <div>
              <img src={commentIcon} height={40} width={40} />
            </div>
            <div className={PostsDetailStyle.commentContent}>
              <Link to={`/users/${comment.id}`} className="commentLink"><h1>{comment.name}</h1></Link>
              <p>{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
