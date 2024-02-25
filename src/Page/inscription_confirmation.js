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
            <Header isSign={true} />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Création en cours</h1>
                    <h2 className="text-3xl font-bold text-center text-primary mt-8">Veuillez patienter nous déployons
                        votre boutique </h2>
                    <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                        <Sculpting style={{ width: '600px', height: '600px' }}/>
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