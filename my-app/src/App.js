import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Success from './components/Success';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route default path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
