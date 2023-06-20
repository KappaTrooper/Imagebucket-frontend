import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Imggrid from './components/imggrid/Imggrid';
import Uploadbtn from './components/uploadbtn/Uploadbtn';
import UploadForm from './components/uploadform/UploadForm';
import ImageModal from './components/imagemodal/ImageModal';
import axios from 'axios';

function App() {
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
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Imggrid photos={photos} />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/image/:id" element={<ImageModal photos={photos} />} />
        </Routes>
        <Uploadbtn />
      </div>
    </Router>
  );
}

export default App;
