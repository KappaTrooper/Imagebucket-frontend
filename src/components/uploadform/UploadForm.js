import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import { CgImport } from "react-icons/cg";

export default function UploadForm({ takenBy, refreshMain }) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!file || !title || !description) {
      alert("Please fill in all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("takenBy", takenBy);

    axios
      .post("http://localhost:9001/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/images");
        refreshMain(); // Call the refreshMain function to refresh the Main component

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });

  const dropzoneClassName = `dropzone ${isDragActive ? "active" : ""} ${
    file ? "hasFiles" : ""
  }`;

  return (
    <div>
    <div className="upload__box">
      <h1 className="upload__text">Upload your Image</h1>
      </div>

      <form className="upload-item">
        <div
          {...getRootProps({ className: dropzoneClassName })}
          className={dropzoneClassName}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop your images here...</p>
          ) : (
            <>
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="uploaded_image"
                  className="uploaded-image"
                />
              ) : (
                <p>Drop your images here..</p>
              )}
            </>
          )}
        </div>

        <div className="upload-form">
          <label htmlFor="title" className="upload-form__label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="upload-form__title"
          />

          <label htmlFor="description" className="upload-form__label">
            Description:
          </label>
          <textarea
          
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
            className="upload-form__description"
          ></textarea>

          <div className="upload-form__taken">
          <label htmlFor="takenBy" className="upload-form__takenby">Taken By:</label>

          <p className="upload-form__name">{takenBy}</p>
          </div>

          <div className="upload-button">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!file || !title || !description}
              className="upload-button__btn"
            >
              Upload
            </button>
            <button className="upload-button__btn">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
