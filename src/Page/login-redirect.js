import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { ReactComponent as Stats } from '../svg/stats.svg';

function LoginRedirect() {

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Bonjour Kyan</h1>
                    <h2 className="text-3xl font-bold text-center text-primary mt-8">Nous vous redirigeons vers votre espace personnel</h2>
                    <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                        <Stats style={{ width: '600px', height: '600px' }}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LoginRedirect;