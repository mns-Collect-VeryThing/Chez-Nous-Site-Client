import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { ReactComponent as Dasboard } from '../svg/Dashboard-pana.svg';
import { ReactComponent as Sculpting } from '../svg/Sculpting-amico.svg';
import { ReactComponent as Shopping } from '../svg/undraw_shopping_re_hdd9.svg';
import { ReactComponent as Subscription } from '../svg/undraw_subscriptions_re_k7jj.svg';

function CommentCaMarche() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">{t('CommentCaMarche')}</h1>

                    <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto">
                        <div>
                            <Subscription />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary">#1 Choisir</h2>
                            <p>Choisissez la formule la plus adapter à votre entreprise. Chaque forfait est modifiable et ajustable selon vos besoins.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold text-secondary">#2 Créer</h2>
                            <p>Donner nous votre logo et quelque couleurs et on s’occupe du reste. Retrouver quelque minutes après votre inscriptions votre boutique en ligne prête à l’emploie.</p>
                        </div>
                        <div>
                            <Sculpting/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto">
                        <div>
                            <Shopping />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary">#3 Vendre</h2>
                            <p>En livraison à domicile, en point relais ou en click dans collect dans votre boutique. Vendez vos produits à vos clients à travers votre nouvelle plateforme.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold text-secondary">#4 Suivre</h2>
                            <p>Suivez les commandes de vos clients en temps réel. Mais également suivez la progression de votre business grâce à l’espace qui vous est réserver.</p>
                        </div>
                        <div>
                            <Dasboard/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CommentCaMarche;