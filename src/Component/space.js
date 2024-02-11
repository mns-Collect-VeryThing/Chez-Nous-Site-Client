import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Customization } from '../svg/customization.svg';
import { ReactComponent as Data } from '../svg/data.svg';

function SpaceComponent() {
    const { t } = useTranslation();

    return (
        <>
            <div className="grid grid-cols-2 gap-8 mt-12 mx-auto">
                <div className="h-64">
                    <Customization className="w-full h-full"/>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-secondary">Personnaliser votre site, avec votre nom, logo et
                        couleur, un site qui vous ressemble !</h1>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-secondary">Retrouver toutes vos commandes, statistiques et
                        différents outil pour piloter votre entreprise !</h1>
                </div>
                <div className="h-64">
                    <Data className="w-full h-full"/>
                </div>
            </div>
        </>
    );
}

export default SpaceComponent;