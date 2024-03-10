import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FileUpload from './components/FileUpload'
import Camera from './components/Camera'
import Login from './components/Login'
import Success from './components/Success';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
    <Routes>
        <Route default path='/' element={<Login />} />
        <Route path='/menu' element={<Success />} />
        <Route path='/ocr' element={<Camera url=''/>} />
        <Route path='/invoice' element={<FileUpload url=''/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;