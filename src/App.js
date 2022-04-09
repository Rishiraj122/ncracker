import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, BrowserRouter,} from "react-router-dom";
import Welcome from './Pages/Welcome';
import Front from './Pages/Front';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
