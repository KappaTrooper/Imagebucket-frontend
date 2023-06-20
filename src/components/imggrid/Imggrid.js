import React, { useState, useEffect } from 'react';
import './Imggrid.scss';

export default function Imggrid({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="photo-text"> Witness the Galaxy</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:9001/uploads/${photo}`}
              alt="grid_image"
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <img
              src={`http://localhost:9001/uploads/${selectedImage}`}
              alt="modal_image"
            />
          </div>
        </div>
      )}
    </>
  );
}
