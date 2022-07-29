import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,
  Route} from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Users from './pages/Users';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/users" element={<Users/>} exact/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
