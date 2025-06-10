import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import TermsAndCondition from "./pages/TermsAndCondtion";
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        {/* other routes */}
      </Routes>
   </Router>
  )
}

export default App
