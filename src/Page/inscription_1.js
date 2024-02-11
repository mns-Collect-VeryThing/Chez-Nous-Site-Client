import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
function Inscription() {
    const { t } = useTranslation();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('Informations')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('ApprendrePlus')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center text-center">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Prenom')}</span>
                                    </div>
                                    <input type="text"
                                           className="input input-bordered w-full max-w-xs"
                                           placeholder="John" {...register("firstName", {required: true})} />
                                    <div className="label">
                                        {errors.firstName &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Nom')}</span>
                                    </div>
                                    <input type="text"
                                           className="input input-bordered w-full max-w-xs"
                                           placeholder="Doe" {...register("lastName", {required: true})} />
                                    <div className="label">
                                        {errors.lastName &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('MDP')}</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full max-w-xs"
                                       placeholder="********" {...register("password", {required: true})} />
                                <div className="label">
                                    {errors.password &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Email')}</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full max-w-xs"
                                       placeholder="john.doe@gmail.com" {...register("email", {required: true})} />
                                <div className="label">
                                    {errors.email &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
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

export default Inscription;