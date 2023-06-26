import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Imggrid from '../../components/imggrid/Imggrid';
import ImageModal from '../../components/imagemodal/ImageModal';
import UploadForm from '../../components/uploadform/UploadForm';
import Uploadbtn from '../../components/uploadbtn/Uploadbtn';
import UserImage from '../../components/userImage/UserImage';
import ImageInfo from '../../components/imageinfo/ImageInfo'
import axios from 'axios';
import './Main.scss';
import { UserProvider, useUser } from '../../components/UserContext/UserProvider';

export default function Main() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState('');
  const navigate = useNavigate();
  const { username } = useUser(); // Retrieve the username from the UserProvider context

  useEffect(() => {
    axios
      .get('http://localhost:9001/upload/get')
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);


  const fetchPhotos = () => {
    axios
      .get('http://localhost:9001/upload/get')
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refreshMain = () => {
    fetchPhotos(); // Fetch updated photos to refresh the Main component
  };


  return (
    <UserProvider>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Imggrid photos={photos} />} />
          <Route path="/images/:id" element={<ImageModal photos={photos} />} />
          <Route path="/user" element={<UserImage />} />

          <Route path="/:id" element={<ImageInfo />} />

          
          
          <Route
            path="/upload"
            element={<UploadForm takenBy={username} navigate={navigate} refreshMain={refreshMain} />}
          />
        </Routes>
        {/* <Uploadbtn handleUpload={handleUpload} /> */}
      </div>
    </UserProvider>
  );
}
