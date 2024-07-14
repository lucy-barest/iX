import React from "react";

import BlogGrid from "../../components/BlogGrid";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Subheading from "../../components/Subheading";

const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <Subheading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}
