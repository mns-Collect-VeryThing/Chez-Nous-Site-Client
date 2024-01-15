import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
function Inscription_2() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('Activites')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('ApprendrePlusEntreprise')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <div className="card-body items-center text-center">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Nom')}</span>
                                    </div>
                                    <input type="text" placeholder="Pomme & Cie"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                                <label className="form-control w-full max-w-xs w-auto">
                                    <div className="label">
                                        <span className="label-text">{t('Secteur')}</span>
                                    </div>
                                    <select className="select select-bordered">
                                        <option>Alimentaire</option>
                                        <option>Hôtellerie - Restauration</option>
                                        <option>Numérique</option>
                                        <option>Arts, Culture</option>
                                        <option>Ameublement</option>
                                    </select>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('SIRET')}</span>
                                </div>
                                <input type="text" placeholder="552 178 639 00132"
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

export default Inscription_2;