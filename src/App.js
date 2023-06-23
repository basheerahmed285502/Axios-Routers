import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import PostDetail from "./Components/PostsDetail";
import UsersDetail from "./Components/UsersDetail";
import Header from "./Components/Header";
import Error from "./Components/Error";

const App = () => {
  return (
    <div> 
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
