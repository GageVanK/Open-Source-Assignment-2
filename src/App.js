import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
      <Routes>
        <Route path="/students" element={<Students/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
