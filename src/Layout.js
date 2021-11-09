import React from "react";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import PhotoAlbumsReInvented from "./components/PhotoAlbumsReInvented";
import PicturesCollage from "./components/PicturesCollage";
import ExperiencingMemories from "./components/ExperiencingMemories";
function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <PhotoAlbumsReInvented></PhotoAlbumsReInvented>
      <PicturesCollage></PicturesCollage>
      <ExperiencingMemories></ExperiencingMemories>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
