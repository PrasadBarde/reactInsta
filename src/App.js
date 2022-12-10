import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
import Postview from './components/Postview'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <LandingPage/>} />
      <Route path='postview' element={<Postview/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
