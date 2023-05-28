import { Routes, Route } from "react-router-dom";
import Start from './views/Start';
import Current from './views/Current';
import Weekly from './views/Weekly';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/current" element={<Current />} />
          <Route path="/weekly" element={<Weekly />} />
       </Routes>
    </>
  );
}

export default App;
