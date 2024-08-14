import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import {Link, useNavigate, useParams} from "react-router-dom";
import { ReactComponent as Sculpting } from '../svg/Sculpting-amico.svg';
import {ProgressBar} from 'react-loader-spinner'
import {deployShop} from "../service/shopService";
import { ReactComponent as Finish } from '../svg/finish.svg';

function Inscription_Confirmation() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { shopId } = useParams();

    const [isLoading, setIsloading] = useState(true);

    const [deployInformation, setDeployInformation] = useState(null);


    const deploy = async () => {
        const response = await deployShop(shopId);
        setIsloading(false);
        setDeployInformation(response);
    };

    useEffect(() => {
        deploy().then();
    }, [])


    return (
        <>
            <Header isSign={true} />
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    {isLoading ? <>
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
                    </> : <>
                        <div className="max-w-screen-lg mx-auto min-h-screen">
                            <h1 className="text-5xl font-bold text-center text-primary mt-8">Votre site est
                                disponible</h1>
                            <h2 className="text-3xl font-bold text-center text-primary mt-8">Vous pouvez le retrouver
                                votre site en ligne avec le lien suivant :</h2>
                            <div className="flex justify-center items-center h-full">
                                <a href={'http://localhost:' + deployInformation.port} target="_blank"
                                   className="text-3xl font-bold text-center text-secondary underline mt-8">
                                    localhost:{deployInformation.port}
                                </a>
                            </div>
                            <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                                {/*<div className="py-4">*/}
                                {/*    <Link to="/dashboard">*/}
                                {/*        <button className="btn btn-primary">Mon espace personnel</button>*/}
                                {/*    </Link>*/}
                                {/*</div>*/}
                                <Finish style={{width: '600px', height: '600px'}}/>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Inscription_Confirmation;