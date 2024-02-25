import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import {Link, useNavigate} from "react-router-dom";
import { ReactComponent as Finish } from '../svg/finish.svg';
import {ProgressBar} from 'react-loader-spinner'

function Inscription_Finish() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <Header isSign={true} />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Votre site est disponible</h1>
                    <h2 className="text-3xl font-bold text-center text-primary mt-8">Vous pouvez le retrouver votre site en ligne avec le lien suivant :</h2>
                    <Link to="google.com"><h2 className="text-3xl font-bold text-center text-secondary underline mt-8">nomdelaboutique.collect.shop</h2></Link>
                    <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                        <div className="py-4">
                            <Link to="/dashboard"><button className="btn btn-primary">Mon espace personnel</button></Link>
                        </div>
                        <Finish style={{ width: '600px', height: '600px' }}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Inscription_Finish;