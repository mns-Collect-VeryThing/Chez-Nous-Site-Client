import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import {Link, useNavigate} from "react-router-dom";
import { ReactComponent as Sculpting } from '../svg/Sculpting-amico.svg';
import {ProgressBar} from 'react-loader-spinner'

function Inscription_Confirmation() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Création en cours</h1>
                    <h2 className="text-3xl font-bold text-center text-primary mt-8">Veuillez patienter nous déployons
                        votre boutique </h2>
                    <div className="mx-auto mt-8 text-center">
                        {/*<Sculpting/>*/}
                        <ProgressBar
                            height="200"
                            width="200"
                            barColor="#00b0ff"
                            borderColor="#ff5733"
                            ariaLabel="rotating-square-loading"
                            strokeWidth="4"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Inscription_Confirmation;