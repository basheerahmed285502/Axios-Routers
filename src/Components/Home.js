import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeStyle from "./home.module.css"

const Home = () => {

    const [homePosts, setHomePosts] = useState([])
    const firstTenValues = homePosts.filter((value, index) => index < 10);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setHomePosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="tenPostsContainer">
            <h1 className={HomeStyle.top}>Displaying the first 10 Posts</h1>
            <ul>
                {firstTenValues.map((value, index) => (
                    <div className={HomeStyle.content}>
                       <Link to={`/posts/${value.id}`}><li key={index}>{value.title}</li></Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Home;
