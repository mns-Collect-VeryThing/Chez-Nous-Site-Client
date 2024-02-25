import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';

function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        navigate('/login/redirect');
    };

    return (
        <>
            <Header />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="text-5xl font-bold text-center text-primary mt-8">Connexion</div>
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
                            <div className="card-actions mt-4 grid grid-cols-2">
                                <Link to="/reset-password"><button className="btn btn-primary btn-outline">Mot de passe oublié </button></Link>
                                <input className="btn btn-primary" type="submit" value="Connexion"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Login;