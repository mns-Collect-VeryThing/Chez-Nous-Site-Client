import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Page";
import Inscription from "./Page/inscription_1";
import Inscription_2 from "./Page/inscription_2";
import Inscription_3 from "./Page/inscription_3";
import Inscription_4 from "./Page/inscription_4";
import Tools from "./Page/tools";
import './i18n/i18n';
import Offers from "./Page/offers";
import CommentCaMarche from "./Page/comment-ca-marche";
import FAQ from "./Page/faq";
import Legal from "./Page/legal";
import Inscription_Confirmation from "./Page/inscription_confirmation";
import Inscription_Finish from "./Page/inscription_finish";
import Contact from "./Page/contact";
import Login from "./Page/login";
import LoginRedirect from "./Page/login-redirect";
import ResetPassword from "./Page/reset-password";
import ResetPassword2 from "./Page/reset-password-2";
import InscriptionShop from "./Page/inscription_shop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inscription/1" element={<Inscription />} />
            <Route path="/inscription/shop" element={<InscriptionShop />} />
            <Route path="/inscription/2" element={<Inscription_2 />} />
            <Route path="/inscription/3" element={<Inscription_3 />} />
            <Route path="/inscription/4" element={<Inscription_4 />} />
            <Route path="/inscription/confirmation/:shopId" element={<Inscription_Confirmation />} />
            <Route path="/inscription/finish" element={<Inscription_Finish />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mention-legal" element={<Legal />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />

            <Route path="/login" element={<Login />} />
            <Route path="/login/redirect" element={<LoginRedirect />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/2" element={<ResetPassword2 />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
