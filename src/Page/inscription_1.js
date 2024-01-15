import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
function Inscription() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('Informations')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('ApprendrePlus')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <div className="card-body items-center text-center">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Prenom')}</span>
                                    </div>
                                    <input type="text" placeholder="John"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Nom')}</span>
                                    </div>
                                    <input type="text" placeholder="Doe"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('MDP')}</span>
                                </div>
                                <input type="text" placeholder="********"
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Email')}</span>
                                </div>
                                <input type="text" placeholder="john.doe@gmail.com"
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary">{t('Suivant')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Inscription;