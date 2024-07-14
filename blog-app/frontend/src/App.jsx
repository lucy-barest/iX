import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Blogs from "./pages/BlogsPage";
import Categories from "./pages/CategoriesPage";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
    </div>
  );
}

export default App;