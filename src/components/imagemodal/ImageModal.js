import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ImageModal.scss'

export default function ImageModal({ photos }) {
  const { id } = useParams();
  const selectedImage = photos.find((photo) => photo._id === id);
  const navigate = useNavigate();

  if (!selectedImage) {
    return null;
  }

  const closeModal = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <img
          src={`http://localhost:9001/uploads/${selectedImage.photo}`}
          alt="modal_image"
          className="modal-image"
        />
      
      </div>
    </div>
  );
}
