// src/App.jsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import TermsAndCondition from "./pages/TermsAndCondtion"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from './component/ScrollToTop';
import CreateYourPlayerCard from './pages/CreateYourPlayerCard';
import FormPage from './pages/FormPage';
import CustomizedCard from './pages/CustomizedCard';

function App()  {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createyourplayercard" element={<CreateYourPlayerCard />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/customizedcard" element={<CustomizedCard />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      </>
  );
}

export default App;
