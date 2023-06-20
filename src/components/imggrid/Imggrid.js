import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Imggrid.scss';

export default function Imggrid({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const openModal = (photoId) => {
    const selectedPhoto = photos.find((photo) => photo._id === photoId);
    setSelectedImage(selectedPhoto);
    navigate(`/image/${photoId}`); // Navigate to the URL with image ID
  };

  const closeModal = () => {
    setSelectedImage(null);
    navigate('/'); // Navigate back to the home page
  };

  return (
    <>
      <h1 className="photo-text">Witness the Galaxy</h1>
      <div className="grid">
        {photos.map(({ _id, photo, title, description, takenBy }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:9001/uploads/${photo}`}
              alt="grid_image"
              onClick={() => openModal(_id)}
            />
            <div className="image-details">
              <h2>{title}</h2>
              <p>{description}</p>
              <p>Taken by: {takenBy}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <img
              src={`http://localhost:9001/uploads/${selectedImage.photo}`}
              alt="modal_image"
            />
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <p>Taken by: {selectedImage.takenBy}</p>
          </div>
        </div>
      )}
    </>
  );
}
