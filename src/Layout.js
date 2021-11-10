import React, { useContext } from "react";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import PhotoAlbumsReInvented from "./components/PhotoAlbumsReInvented";
import PicturesCollage from "./components/PicturesCollage";
import ExperiencingMemories from "./components/ExperiencingMemories";
import Pricing from "./components/Pricing";
import Feedback from "./components/Feedback";
import PictureAndText from "./components/PictureAndText";
import AuthContext from "./components/store/AuthContext";
function Layout() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Navbar></Navbar>

      <PhotoAlbumsReInvented></PhotoAlbumsReInvented>
      <PicturesCollage></PicturesCollage>
      <ExperiencingMemories></ExperiencingMemories>
      <Pricing></Pricing>
      <Feedback></Feedback>
      <PictureAndText></PictureAndText>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
