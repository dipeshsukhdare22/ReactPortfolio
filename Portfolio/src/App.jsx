import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";


import "./App.css"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
