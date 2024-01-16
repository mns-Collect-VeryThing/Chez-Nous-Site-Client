import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
function Inscription_3() {
    const { t } = useTranslation();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('InfoFacturation')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('DeployerBoutique')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center text-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('AdresseFacture')}</span>
                                </div>
                                <input type="text" {...register("addresBill", {required: true})}
                                       placeholder="Rue des Chênes Blancs"
                                       className="input input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.addresBill &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('CodePostal')}</span>
                                    </div>
                                    <input type="text" {...register("postalCode", {required: true})} placeholder="75000"
                                           className="input input-bordered w-full max-w-xs"/>
                                    <div className="label">
                                        {errors.postalCode &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Ville')}</span>
                                    </div>
                                    <input type="text" {...register("city", {required: true})} placeholder="Paris"
                                           className="input input-bordered w-full max-w-xs"/>
                                    <div className="label">
                                        {errors.city &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('NumeroCarte')}</span>
                                </div>
                                <input type="text" {...register("cardNumber", {required: true})}
                                       placeholder="1234 5678 9123 4567"
                                       className="input input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.cardNumber &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('DateExpiration')}</span>
                                    </div>
                                    <input type="text" {...register("expirationDate", {required: true})}
                                           placeholder="03/26"
                                           className="input input-bordered w-full max-w-xs"/>
                                    <div className="label">
                                        {errors.expirationDate &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('CVV')}</span>
                                    </div>
                                    <input type="text" {...register("CVV", {required: true})} placeholder="123"
                                           className="input input-bordered w-full max-w-xs"/>
                                    <div className="label">
                                        {errors.CVV &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <input className="btn btn-primary" type="submit" value={t('Suivant')}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Inscription_3;