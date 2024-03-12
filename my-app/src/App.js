import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FileUpload from './components/FileUpload'
import Camera from './components/Camera'
import Login from './pages/Login'
import GetStarted from './pages/GetStarted';
import Footer from './components/Footer';
import {ReactComponent as Circle} from "./static/Component 1screen_design_01.svg"
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
    <Circle style={{ position: 'absolute'}} />
    <Routes>
        <Route path='/getstarted' element={<GetStarted />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/ocr' element={<Camera url=''/>} />
        <Route path='/invoice' element={<FileUpload url=''/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;