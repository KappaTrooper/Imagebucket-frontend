import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Imggrid from '../../components/imggrid/Imggrid';
import ImageModal from '../../components/imagemodal/ImageModal';
import Uploadbtn from '../../components/uploadbtn/Uploadbtn';
import axios from 'axios';
import './Main.scss';

export default function Main() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:9001/api/get')
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);

  return (
    <>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Imggrid photos={photos} setUpdateUI={setUpdateUI} />
            }
          />
          <Route
            path="/images/:id"
            element={<ImageModal photos={photos} />}
          />
        </Routes>
        <Uploadbtn />
      </div>
    </>
  );
}
