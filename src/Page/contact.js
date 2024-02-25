import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { ReactComponent as Dasboard } from '../svg/Dashboard-pana.svg';
import { ReactComponent as Sculpting } from '../svg/Sculpting-amico.svg';
import { ReactComponent as Shopping } from '../svg/undraw_shopping_re_hdd9.svg';
import { ReactComponent as Subscription } from '../svg/undraw_subscriptions_re_k7jj.svg';
import {useForm} from "react-hook-form";
import {toast, Toaster} from "react-hot-toast";

function Contact() {
    const { t } = useTranslation();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        toast.success(t('Message envoyé'));
    };

    return (
        <>
            <Header/>
            <Toaster/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Contactez-nous</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="items-center text-center max-w-3xl mx-auto">
                        <div className="grid grid-cols-2 gap-4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">{t('Prenom')}</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full"
                                       placeholder="John" {...register("name", {required: true})} />
                                <div className="label">
                                    {errors.firstName &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Mail</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full"
                                       placeholder="John@gmail.com" {...register("mail", {required: true})} />
                                <div className="label">
                                    {errors.firstName &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Téléphone</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full"
                                       placeholder="00.11.22.33.44" {...register("phone", {required: true})} />
                                <div className="label">
                                    {errors.firstName &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Nom de société</span>
                                </div>
                                <input type="text"
                                       className="input input-bordered w-full"
                                       placeholder="Collect" {...register("societe", {required: true})} />
                                <div className="label">
                                    {errors.firstName &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Sujet</span>
                            </div>
                            <input type="text"
                                   className="input input-bordered w-full"
                                   placeholder="Demande de renseignement" {...register("subject", {required: true})} />
                            <div className="label">
                                {errors.firstName &&
                                    <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Message</span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Message" {...register("message", {required: true})}></textarea>
                            <div className="label">
                                {errors.firstName &&
                                    <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                            </div>
                        </label>
                        <div className="card-actions justify-end mt-4">
                            <input className="btn btn-primary" type="submit" value={t('Suivant')}/>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;