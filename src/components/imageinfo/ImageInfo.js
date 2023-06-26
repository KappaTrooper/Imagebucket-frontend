import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import likes from '../../assets/likes.svg';
import views from '../../assets/views.svg';
import axios from 'axios';
import './ImageInfo.scss';

export default function ImageInfo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // Fetch photo details based on the 'id' parameter
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/upload/${id}`);
        console.log(response.data)
        const { photo } = response.data;
       
        setPhoto(photo);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  useEffect(() => {
    // Increase impressions when the component is visited
    const increaseImpressions = async () => {
      try {
        await axios.patch(`http://localhost:9001/upload/${id}/increase-impressions`);
      } catch (error) {
        console.error(error);
      }
    };
  
    increaseImpressions();
  }, [id]);

  const increaseLikes = async () => {
    try {
      const response = await axios.patch(`http://localhost:9001/upload/${id}/increase-likes`);
      const updatedPhoto = response.data;
      setPhoto(updatedPhoto);
    } catch (error) {
      console.error(error);
    }
  };

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-info">
      
      <div className="image-info__details">
        <img className="image-info__images" src={`http://localhost:9001/uploads/${photo.photo}`} alt={photo.title} />
        <div className="image-info__info">
     
        <div className="image-info__likes-views">


  <div className="image-info__title-description">
    <h2 className="image-info__photo-title">{photo.title}</h2>
    <p className="image-info__description">{photo.description}</p>
    <p className="image-info__takenby">by: {photo.takenBy}</p>
  </div>
  <div className="image-info__likes">
    <img src={likes} className="image-info__likes-icon"  onClick={increaseLikes} alt="Likes" />
    <p className="image-info__likes-count">{photo.likes}</p>
  </div>
  <div className="image-info__views">
    <img src={views} className="image-info__views-icon" alt="Views" />
    <p className="image-info__views-count">{photo.impressions}</p>
  </div>
</div>

        
        </div>
      </div>
      <div className="image-info">
              <h3 className="image-info__comment-title">Comments</h3>
        <div className="image-info__comment-form">
          <input type="text" placeholder="Your username" />
          <textarea placeholder="Leave a comment"></textarea>
          <button type="submit">Submit</button>
        </div>
        <div className="image-info__comment-list">
          <div className="image-info__comment">
            <p className="image-info__comment-username">Corvo:</p>
            <p className="image-info__comment-text">Love this image</p>
          </div>
          <div className="image-info__comment">
            <p className="image-info__comment-username">Emily:</p>
            <p className="image-info__comment-text">One of your best shots, would love to be there</p>
          </div>
          <div className="image-info__comment">
            <p className="image-info__comment-username">Daud:</p>
            <p className="image-info__comment-text">I wish I bought my camera with me too!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
