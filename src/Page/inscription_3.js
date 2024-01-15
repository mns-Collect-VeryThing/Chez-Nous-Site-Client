import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
function Inscription_3() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('InfoFacturation')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('DeployerBoutique')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <div className="card-body items-center text-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('AdresseFacture')}</span>
                                </div>
                                <input type="text" placeholder="Rue des Chênes Blancs"
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('CodePostal')}</span>
                                    </div>
                                    <input type="text" placeholder="75000"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Ville')}</span>
                                    </div>
                                    <input type="text" placeholder="Paris"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('NumeroCarte')}</span>
                                </div>
                                <input type="text" placeholder="1234 5678 9123 4567"
                                       className="input input-bordered w-full max-w-xs"/>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('DateExpiration')}</span>
                                    </div>
                                    <input type="text" placeholder="03/26"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('CVV')}</span>
                                    </div>
                                    <input type="text" placeholder="123"
                                           className="input input-bordered w-full max-w-xs"/>
                                </label>
                            </div>
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

export default Inscription_3;