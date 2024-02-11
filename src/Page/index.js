import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import OfferComponent from "../Component/offers";
import QuestionComponent from "../Component/question";
import SpaceComponent from "../Component/space";
import HeroComponent from "../Component/hero";
function Index() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="mb-20">
                        <h2 className="text-5xl font-bold text-center text-primary mt-8">{t('NosOffres')}</h2>
                        <HeroComponent/>
                    </div>
                    <div className="my-20">
                        <h2 className="text-5xl font-bold text-center text-primary mt-8">{t('NosOffres')}</h2>
                        <OfferComponent/>
                    </div>
                    <div className="my-20">
                        <h2 className="text-5xl font-bold text-center text-secondary mt-8">Votre espace</h2>
                        <SpaceComponent/>
                    </div>
                    <div className="my-20">
                        <h2 className="text-5xl font-bold text-center text-primary mt-8">Des questions ?</h2>
                        <QuestionComponent/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;