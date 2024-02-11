import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import OfferComponent from "../Component/offers";
function Offers() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">{t('NosOffres')}</h1>
                    <OfferComponent />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Offers;