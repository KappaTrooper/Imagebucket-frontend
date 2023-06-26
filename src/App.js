import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Landing from './pages/Landing/Landing';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { UserProvider } from './components/UserContext/UserProvider';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/images/*" element={<UserProvider><Main /></UserProvider>} />
      </Routes>
    </Router>
  );
}

export default App;
