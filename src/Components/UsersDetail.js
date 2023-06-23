import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UsersStyle from "./UsersDetail.module.css";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [photos, setPhotos] = useState([])
  const [singlePhoto, setSinglePhoto] = useState([])
  const fiveHundredPhotos = photos.filter((value, index) => index < 500);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  useEffect(() => {
    let val = fiveHundredPhotos.filter((photo) => photo.id === parseInt(id))
    setSinglePhoto(val)
  }, [fiveHundredPhotos])
  

  return (
    <div>
      <div className={UsersStyle.container}>
        <div>
          {singlePhoto.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} height={150} width={150} />
            </div>
          ))}
          <p>Id: {user.id}</p>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
