import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/home.jsx"
import ContactUs from "./component/contact"
import About from "./component/about"
import Admin from "./component/Admin"
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/admin" element={<Admin />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
