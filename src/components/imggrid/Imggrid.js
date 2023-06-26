import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Imggrid.scss';

export default function Imggrid({ photos }) {
  const [usernames, setUsernames] = useState({});
  const navigate = useNavigate();

  const handleClick = (photoId) => {
    console.log('Clicked photoId:', photoId);
    navigate(`/images/${photoId}`); // Navigate to the URL with image ID
  };

  useEffect(() => {
    // Fetch usernames based on user IDs
    const fetchUsernames = async () => {
      try {
        const userIds = photos.map((photo) => photo.takenBy);
        const response = await axios.get('http://localhost:9001/get', {
          params: { userIds: userIds.join(',') },
        });
        console.log(response);
        const { data } = response;
        const usernames = {};

        // Iterate through the data array and create the usernames object
        data.forEach((photo) => {
          usernames[photo.takenBy._id] = photo.takenBy.username;
        });

        setUsernames(usernames);
      } catch (error) {
        console.error(error);
      }
    };

    if (photos.length > 0) {
      fetchUsernames();
    }
  }, [photos]);

  return (
    <>
      <div className="grid">
        {photos.map(({ _id, photo, title, description, takenBy }) => (
          <div key={_id} className="grid__item" onClick={() => handleClick(_id)}>
            <div className="image-details">
              <img className="image-details__img" src={`http://localhost:9001/uploads/${photo}`} alt="grid_image" />
              <div className="image-details__overlay">
                <h2 className="image-details__title">{title}</h2>
                <p className="image-details__taken-by">Posted by: {takenBy}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
