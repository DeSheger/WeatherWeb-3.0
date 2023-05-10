import { Routes, Route } from "react-router-dom";
import Start from './views/Start';
import Home from './views/Home';
import Weekly from './views/Weekly';

import './App.css';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weekly" element={<Weekly />} />
       </Routes>
    </>
  );
}

export default App;
