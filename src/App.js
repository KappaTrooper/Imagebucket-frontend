import './App.css';
import Navbar from './components/navbar/Navbar';
import Uploadbtn from './components/uploadbtn/Uploadbtn';
import Imggrid from './components/imggrid/Imggrid'; 
import { useEffect, useState } from 'react';
import axios from 'axios';  
function App() {

  const [photos, setPhotos] = useState([])
  const [updateUI, setUpdateUI] = useState("")

  useEffect(() => {
    axios.get("http://localhost:9001/api/get")
    .then((res) => {
      console.log(res.data);
      setPhotos(res.data);
    })
    .catch((err) => {
      console.log(err = "error bitch");
    });  
  }, [updateUI]);


  return (
   <div>
    <Navbar />
    <Imggrid  photos={photos}/>
    <Uploadbtn setUpdateUI={setUpdateUI} />
   </div>
  );
}

export default App;
