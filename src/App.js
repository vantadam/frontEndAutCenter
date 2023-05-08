import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import ManageUser from './Pages/Admin/ManageUser';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ProfilePage from './Pages/User/ProfilePage';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin/manageUser" element={<ManageUser/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>

    </Router>
    </div>
  );
}

export default App;
