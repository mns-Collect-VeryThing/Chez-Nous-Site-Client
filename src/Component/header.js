import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function Header() {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/"><a className="text-white bg-primary">{t('Inscription')}</a></Link></li>
                        <li><Link to="/"><a className="text-base-200">{t('CommentCaMarche')}</a></Link></li>
                        <li><Link to="/"><a className="text-base-200">{t('NosOffres')}</a></Link></li>
                        <li><Link to="/"><a className="text-base-200">{t('Connexion')}</a></Link></li>
                        <li><Link to="/"><a className="text-base-200">{t('Demonstration')}</a></Link></li>
                    </ul>
                </div>
                <a className="btn btn-primary btn-outline text-xl">{t('BrandName')}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/"><a className="text-base-200">{t('Demonstration')}</a></Link></li>
                    <li><Link to="/"><a className="text-base-200">{t('CommentCaMarche')}</a></Link></li>
                    <li><Link to="/"><a className="text-base-200">{t('NosOffres')}</a></Link></li>
                    <li><Link to="/"><a className="text-base-200">{t('Connexion')}</a></Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <a className="btn btn-primary">{t('Inscription')}</a>
            </div>
        </div>
    );
}
export default Header;