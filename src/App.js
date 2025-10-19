// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovAIEnhancedLanding from './MovAIEnhancedLanding'; // Tu landing page actual
import PrivacyPolicy from './PrivacyPolicy';
import WhatsAppPolicy from './WhatsAppPolicy';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<MovAIEnhancedLanding />} />
        
        {/* Política de Privacidad */}
        <Route path="/policies" element={<PrivacyPolicy />} />
        
        {/* Política de WhatsApp */}
        <Route path="/policies-whatsapp" element={<WhatsAppPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;