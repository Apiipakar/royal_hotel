import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/pages/Home";
import { Service } from "./components/pages/Service";
import { Application } from "./components/pages/Application";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Notfound } from "./components/pages/Notfound";
import { Footer } from "./components/pages/Footer";
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
