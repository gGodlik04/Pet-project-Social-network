import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';
import './fonts/Inter-Regular.ttf';
import './fonts/Inter-SemiBold.ttf';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App /></BrowserRouter>
);
