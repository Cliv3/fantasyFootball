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
import CardPreview from './pages/CardPreview';
import { CardProvider } from './CardContext'; 
import CardForm from './pages/CardForm';


function App() {
  return (
    <CardProvider> {/* ✅ wrap everything in CardProvider */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createyourplayercard" element={<CreateYourPlayerCard />} />
        {/* <Route path="/formpage" element={<FormPage />} /> */}
        {/* <Route path="/customizedcard" element={<CustomizedCard />} /> */}
        <Route path="/cardform" element={<CardForm />} /> 
        <Route path="/cardpreview" element={<CardPreview />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </CardProvider>
  );
}

export default App;
