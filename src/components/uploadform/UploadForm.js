import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UploadForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [takenBy, setTakenBy] = useState('');

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('takenBy', takenBy);

    axios
      .post('http://localhost:9001/api/save', formData)
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTakenByChange = (event) => {
    setTakenBy(event.target.value);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form>
        <label htmlFor="file">Choose an image:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>

        <label htmlFor="takenBy">Taken By:</label>
        <input
          type="text"
          id="takenBy"
          name="takenBy"
          value={takenBy}
          onChange={handleTakenByChange}
        />

        <button type="button" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
}
