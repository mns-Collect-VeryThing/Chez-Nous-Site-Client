import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';

function ResetPassword() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        navigate('/reset-password/2');
    };

    return (
        <>
            <Header />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="text-5xl font-bold text-center text-primary mt-8">Mot de passe oublié ?</div>
                    <div className="text-3xl font-bold text-center text-primary mt-8">Ca arrive à tout le monde</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center text-center">
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
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">SIRET</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full max-w-xs"
                                       placeholder="SIRET" {...register("siret", {required: true})} />
                                <div className="label">
                                    {errors.password &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <div className="card-actions justify-end mt-4">
                                <input className="btn btn-primary" type="submit" value="Envoyer"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ResetPassword;