import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import Avantage from "../Component/avantage";
function Offers() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">{t('NosOffres')}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="card bg-base-100 border-2 border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-md">{t('PetiteEntreprise')}</h2>
                                <h2 className="card-title text-3xl">{t('SmallPrice')} €</h2>
                                <h2 className="text-sm">{t('ParMois')}</h2>
                                <h2 className="card-title text-xl mt-4">{t('Avantages')}</h2>
                                <Avantage avantage={t('avantage1')}/>
                                <div className="card-actions justify-center mt-4">
                                    <button className="btn btn-primary btn-outline">{t('Commencer')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 border-2 border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-md">{t('MediumEntreprise')}</h2>
                                <h2 className="card-title text-3xl">{t('StandardPrice')} €</h2>
                                <h2 className="text-sm">{t('ParMois')}</h2>
                                <h2 className="card-title text-xl mt-4">{t('Avantages')}</h2>
                                <Avantage avantage={t('avantage1')}/>
                                <Avantage avantage={t('avantage2')}/>
                                <Avantage avantage={t('avantage3')}/>
                                <div className="card-actions justify-center mt-4">
                                    <button className="btn btn-primary">{t('Commencer')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 border-2 border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-md">{t('Professional')}</h2>
                                <h2 className="card-title text-3xl">{t('ProfessionalPrice')} €</h2>
                                <h2 className="text-sm">{t('ParMois')}</h2>
                                <h2 className="card-title text-xl mt-4">{t('Avantages')}</h2>
                                <Avantage avantage={t('avantage1')}/>
                                <Avantage avantage={t('avantage2')}/>
                                <Avantage avantage={t('avantage3')}/>
                                <Avantage avantage={t('avantage4')}/>
                                <div className="card-actions justify-center mt-4">
                                    <button className="btn btn-primary btn-outline">{t('Commencer')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Offers;