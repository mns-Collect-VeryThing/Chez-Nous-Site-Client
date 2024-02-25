import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { ReactComponent as Send } from '../svg/send.svg';

function ResetPassword2() {

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Parfait !</h1>
                    <h2 className="text-3xl font-bold text-center text-primary mt-8">Un email a été envoyer afin de réinitialiser votre mot de passe</h2>
                    <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                        <Send style={{ width: '600px', height: '600px' }}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ResetPassword2;