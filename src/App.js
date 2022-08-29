import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Main from "./components/main/main.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AboutUs from "./components/aboutus/aboutus.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;