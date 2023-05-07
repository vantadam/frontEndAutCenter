import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>

    </Router>
    </div>
  );
}

export default App;
