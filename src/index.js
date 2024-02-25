import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Page";
import Inscription from "./Page/inscription_1";
import Inscription_2 from "./Page/inscription_2";
import Inscription_3 from "./Page/inscription_3";
import Tools from "./Page/tools";
import './i18n/i18n';
import Offers from "./Page/offers";
import CommentCaMarche from "./Page/comment-ca-marche";
import FAQ from "./Page/faq";
import Legal from "./Page/legal";
import Inscription_Confirmation from "./Page/inscription_confirmation";
import Inscription_Finish from "./Page/inscription_finish";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inscription/1" element={<Inscription />} />
            <Route path="/inscription/2" element={<Inscription_2 />} />
            <Route path="/inscription/3" element={<Inscription_3 />} />
            <Route path="/inscription/confirmation" element={<Inscription_Confirmation />} />
            <Route path="/inscription/finish" element={<Inscription_Finish />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/mention-legal" element={<Legal />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
