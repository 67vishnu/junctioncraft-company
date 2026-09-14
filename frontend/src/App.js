// FILE: App.js — App shell: routing + global layout.
// EDIT HERE TO: add/rename pages & URL routes, or change global wrappers
// (Navbar, Footer, floating WhatsApp button, toast notifications).

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.hostname === "67vishnu.github.io" ? "/junctioncraft" : "/"}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
