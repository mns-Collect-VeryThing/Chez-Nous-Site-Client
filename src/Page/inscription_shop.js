import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {useTranslation} from 'react-i18next';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {postShop} from "../service/shopService";

function InscriptionShop() {
    const { t } = useTranslation();
    const navigate = useNavigate();


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        data.creator = btoa(unescape(encodeURIComponent(decodedToken.username)));
        const response = await postShop(data);
        navigate('/inscription/confirmation/' + response.id);

    };

    return (
        <>
            <Header isSign={true} />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('Activites')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('ApprendrePlusEntreprise')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center text-center">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">{t('Nom')}</span>
                                    </div>
                                    <input type="text" className="input input-bordered w-full max-w-xs"
                                           placeholder="Pomme & Cie"
                                           {...register("name", {required: true})}/>
                                    <div className="label">
                                        {errors.name &&
                                            <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                    </div>
                                </label>
                                <label className="form-control w-full max-w-xs w-auto">
                                    <div className="label">
                                        <span className="label-text">{t('Secteur')}</span>
                                    </div>
                                    <select {...register("activitySector", {required: 'Please select a sector'})}
                                            className="select select-bordered">
                                        <option value="alimentaire">Alimentaire</option>
                                        <option value="hotellerie">Hôtellerie</option>
                                        <option value="numérique">Numérique</option>
                                        <option value="art">Art</option>
                                        <option value="ameublement">Ameublement</option>
                                    </select>
                                </label>
                                <label className="form-control w-full col-span-2">
                                    <div className="label">
                                        <span className="label-text">{t('Theme')}</span>
                                    </div>
                                    <select {...register("theme", {required: 'Please select a theme'})}
                                            className="select select-bordered">
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="cyberpunk">Cyberpunk</option>
                                        <option value="retro">Retro</option>
                                        <option value="hallowen">Hallowen</option>
                                    </select>
                                </label>
                            </div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('SIRET')}</span>
                                </div>
                                <input type="text" {...register("siretNumber", {required: true})}
                                       placeholder="552 178 639 00132"
                                       className="input input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.siretNumber &&
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

export default InscriptionShop;