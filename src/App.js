import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import Reflect from './components/reflect'
import Create from './components/create'
import { Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const navigateToReflect = () => {
    navigate('/reflect');
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <>
    <div>
      <div>
        <Routes>
          <Route path="/reflect" element={<Reflect />} />
          <Route path="/create" element={<Create/>} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;