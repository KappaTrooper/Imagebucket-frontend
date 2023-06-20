import './App.css';
import Navbar from './components/navbar/Navbar';
import Uploadbtn from './components/uploadbtn/Uploadbtn';
import Imggrid from './components/imggrid/Imggrid'; 
function App() {
  return (
   <div>
    <Navbar />
    <Imggrid />
    <Uploadbtn />
   </div>
  );
}

export default App;
