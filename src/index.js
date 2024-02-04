import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Page";
import Tools from "./Page/tools";
import './i18n/i18n';
import Offers from "./Page/offers";
import CommentCaMarche from "./Page/comment-ca-marche";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
