import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserImage.scss';

export default function UserImage() {
  const [userImages, setUserImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:9001/upload/userImage', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log('API Response:', res.data);
        setUserImages(res.data);
      })
      .catch((err) => {
        console.log('API Error:', err);
      });
  }, []);

  const handleClick = (photoId) => {
    console.log('Clicked photoId:', photoId);
    navigate(`/images/${photoId}`); // Navigate to the URL with image ID
  };

  console.log('State:', userImages);
  return (
    <div className="user-images">
      <h1 className="user-images__title-page">Your Images</h1>
      <div className="user-images__image-list">
        {Array.isArray(userImages) &&
          userImages.map((image) => (
            <div key={image._id} className="user-images__image-item">
              <div className="user-images__image-wrapper">
                <img
                  src={image.photo}
                  alt={image.title}
                  className="user-images__image"
                  onClick={() => handleClick(image._id)}
                />
                <div className="user-images__overlay">
                  <h3 className="user-images__title">{image.title}</h3>
                  <p className="user-images__description">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
