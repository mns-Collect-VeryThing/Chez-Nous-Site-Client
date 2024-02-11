import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Think } from '../svg/think.svg';
import {Link} from "react-router-dom";

function QuestionComponent() {
    const { t } = useTranslation();

    return (
        <>
            <div>
                <div className="h-96">
                    <Think className="w-full h-full" />
                </div>
                <div className="flex justify-center space-x-5">
                    <Link to="/faq"><a className="btn btn-outline btn-primary">Foire au
                        question</a></Link>
                    <Link to="/comment-ca-marche"><a className="btn btn-primary">Comment ca marche ?</a></Link>
                    <Link to="/contact"><a className="btn btn-outline btn-primary">Nous contacter</a></Link>
                </div>
            </div>
        </>
    );
}

export default QuestionComponent;