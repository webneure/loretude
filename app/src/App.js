import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Course from './components/course';
import Home from './components/home';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
