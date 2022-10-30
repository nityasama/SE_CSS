import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          
        </Routes>
      </Router> */}
      <Registration></Registration>
    </div>
  );
}

export default App;
