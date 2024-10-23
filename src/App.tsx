import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AccountingServices from './pages/AccountingServices';
import ErpSolutions from './pages/ErpSolutions';
import SageSolutions from './pages/SageSolutions';
import Maintenance from './pages/Maintenance';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accounting" element={<AccountingServices />} />
          <Route path="erp" element={<ErpSolutions />} />
          <Route path="sage" element={<SageSolutions />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;