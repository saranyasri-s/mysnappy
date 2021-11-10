import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Faqs from "./components/Faqs";
import HowItWorks from "./components/HowItWorks";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TermsAndConditions from "./components/TermsAndConditions";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/TandC" element={<TermsAndConditions />} />
        <Route path="/auth/SignUp" element={<SignUp></SignUp>} />
        <Route path="/auth/Login" element={<SignIn></SignIn>} />
      </Routes>
    </div>
  );
}

export default App;
