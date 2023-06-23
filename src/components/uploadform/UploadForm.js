import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './UploadForm.scss';

export default function UploadForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [takenBy, setTakenBy] = useState('');

  const handleSubmit = () => {
    if (!file || !title || !description || !takenBy) {
      alert('Please fill in all the fields');
      return;
    }

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('takenBy', takenBy);

    axios
      .post('http://localhost:9001/api/upload', formData)
      .then((res) => {
        console.log(res.data);
        navigate('/images'); // Navigate to the "/images" page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: handleDrop,
  });

  const dropzoneClassName = `dropzone ${isDragActive ? 'active' : ''} ${file ? 'hasFiles' : ''}`;

  return (
    <>
      <Navbar />
      <div>
        <h1>Upload Image</h1>
        <form className="upload-item">
          <div {...getRootProps({ className: dropzoneClassName })} className={dropzoneClassName}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop your images here...</p>
            ) : (
              <p>{file ? 'Uploading... Enter the details below' : 'Drop your images here...'}</p>
            )}
          </div>

          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="takenBy">Taken By:</label>
          <input type="text" id="takenBy" name="takenBy" value={takenBy} onChange={(e) => setTakenBy(e.target.value)} />

          <button type="button" onClick={handleSubmit} disabled={!file || !title || !description || !takenBy}>
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
