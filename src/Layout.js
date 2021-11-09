import React from "react";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
function Layout() {
  return (
    <div>
      <Navbar></Navbar>

      <Footer></Footer>
    </div>
  );
}

export default Layout;
