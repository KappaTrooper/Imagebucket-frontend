import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Imggrid from './components/imggrid/Imggrid';
import Uploadbtn from './components/uploadbtn/Uploadbtn';
import UploadForm from './components/uploadform/UploadForm';
import ImageModal from './components/imagemodal/ImageModal';
import Main from './pages/main/Main';
import Landing from './pages/Landing/Landing';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import axios from 'axios';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/images/:id" element={<ImageModal />} />
        <Route path="/images" element={<Main />} />
        <Route path="/images/upload" element={<UploadForm />} />
      </Routes>
      
    </Router>
  );
}

export default App;
