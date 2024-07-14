import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/HomePage";
import Blogs from "../src/pages/BlogsPage";
import Categories from "../src/components/Categories";

// function App() {
//   return <Home />;
//   // return <BlogsPage />;
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
    </div>
  );
}

export default App;