import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Ecommerce } from '../svg/Ecommerce.svg';

function HeroComponent() {
    const { t } = useTranslation();

    return (
        <>
            <div className="grid grid-cols-2 gap-8 mt-12 mx-auto">
                <div>
                    <h1 className="text-6xl font-bold text-primary">Votre e-commerce
                        en quelque clic</h1>
                </div>
                <div>
                    <Ecommerce/>
                </div>
            </div>
        </>
    );
}

export default HeroComponent;