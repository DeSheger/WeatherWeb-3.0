import { Routes, Route } from "react-router-dom";
import Start from './views/Start';
import Current from './views/Current';
import Weekly from './views/Weekly';
import Map from "./views/Map";

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/current" element={<Current />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/map" element={<Map />} />
       </Routes>
    </>
  );
}

export default App;
