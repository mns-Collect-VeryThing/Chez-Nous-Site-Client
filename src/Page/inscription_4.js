import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
function Inscription_4() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [primaryColor, setPrimaryColor] = useState(null);
    const [secondaryColor, setSecondaryColor] = useState(null);
    const [customPrimaryColor, setCustomPrimaryColor] = useState('');
    const [customSecondaryColor, setCustomSecondaryColor] = useState('');

    const onSubmit = data => {
        console.log(data);
        console.log('Primary Color:', primaryColor);
        console.log('Secondary Color:', secondaryColor);
        console.log('Custom Primary Color:', customPrimaryColor);
        console.log('Custom Secondary Color:', customSecondaryColor);
        navigate('/inscription/confirmation');
    };

    const handleColorChange = (color, type) => {
        if (type === 'primary') {
            setPrimaryColor(color);
        } else if (type === 'secondary') {
            setSecondaryColor(color);
        }
    };

    return (
        <>
            <Header isSign={true}/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="text-5xl font-bold text-center text-primary mt-8">{t('InfoFacturation')}</div>
                    <div className="text-2xl font-bold text-center text-primary mt-8">{t('DeployerBoutique')}</div>
                    <div className="card w-96 mx-auto border-2 border-primary my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center text-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Nom de votre entreprise')}</span>
                                </div>
                                <input type="text" {...register("addresBill", {required: true})}
                                       placeholder="Rue des Chênes Blancs"
                                       className="input input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.addresBill &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Nom de domaine')}</span>
                                </div>
                                <input type="text" {...register("addresBill", {required: true})}
                                       placeholder="Rue des Chênes Blancs"
                                       className="input input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.addresBill &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Logo de votre entreprise')}</span>
                                </div>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs"/>
                                <div className="label">
                                    {errors.addresBill &&
                                        <span className="label-text-alt text-error">Ce champ est obligatoire</span>}
                                </div>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">{t('Couleur de votre site')}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {/* Input Radio pour Rouge */}
                                    <input
                                        type="radio"
                                        id="primaryRedColor"
                                        name="primaryColor"
                                        value="red"
                                        className="hidden"
                                        {...register("primaryColor")}
                                        checked={primaryColor === 'red'}
                                        onChange={() => handleColorChange('red', 'primary')}
                                    />
                                    <label
                                        htmlFor="primaryRedColor"
                                        className={`w-8 h-8 rounded-full bg-red-500 cursor-pointer ${primaryColor === 'red' ? 'ring-2 ring-red-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Bleu */}
                                    <input
                                        type="radio"
                                        id="primaryBlueColor"
                                        name="primaryColor"
                                        value="blue"
                                        className="hidden"
                                        {...register("primaryColor")}
                                        checked={primaryColor === 'blue'}
                                        onChange={() => handleColorChange('blue', 'primary')}
                                    />
                                    <label
                                        htmlFor="primaryBlueColor"
                                        className={`w-8 h-8 rounded-full bg-blue-500 cursor-pointer ${primaryColor === 'blue' ? 'ring-2 ring-blue-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Vert */}
                                    <input
                                        type="radio"
                                        id="primaryGreenColor"
                                        name="primaryColor"
                                        value="green"
                                        className="hidden"
                                        {...register("primaryColor")}
                                        checked={primaryColor === 'green'}
                                        onChange={() => handleColorChange('green', 'primary')}
                                    />
                                    <label
                                        htmlFor="primaryGreenColor"
                                        className={`w-8 h-8 rounded-full bg-green-500 cursor-pointer ${primaryColor === 'green' ? 'ring-2 ring-green-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Violet */}
                                    <input
                                        type="radio"
                                        id="primaryPurpleColor"
                                        name="primaryColor"
                                        value="purple"
                                        className="hidden"
                                        {...register("primaryColor")}
                                        checked={primaryColor === 'purple'}
                                        onChange={() => handleColorChange('purple', 'primary')}
                                    />
                                    <label
                                        htmlFor="primaryPurpleColor"
                                        className={`w-8 h-8 rounded-full bg-purple-500 cursor-pointer ${primaryColor === 'purple' ? 'ring-2 ring-purple-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Orange */}
                                    <input
                                        type="radio"
                                        id="primaryOrangeColor"
                                        name="primaryColor"
                                        value="orange"
                                        className="hidden"
                                        {...register("primaryColor")}
                                        checked={primaryColor === 'orange'}
                                        onChange={() => handleColorChange('orange', 'primary')}
                                    />
                                    <label
                                        htmlFor="primaryOrangeColor"
                                        className={`w-8 h-8 rounded-full bg-orange-500 cursor-pointer ${primaryColor === 'orange' ? 'ring-2 ring-orange-500' : ''}`}
                                    ></label>

                                    {/* Sélecteur de couleur pour la couleur principale */}
                                    <input
                                        type="color"
                                        id="primaryColorPicker"
                                        name="primaryColorPicker"
                                        className={`w-8 h-8 p-0 border-none rounded-full cursor-pointer appearance-none ${customPrimaryColor ? 'ring-2 ring-gray-500' : ''}`}
                                        value={customPrimaryColor}
                                        onChange={(e) => {
                                            setCustomPrimaryColor(e.target.value);
                                            handleColorChange(e.target.value, 'primary');
                                        }}
                                    />
                                </div>
                            </label>

                            {/* Couleur Secondaire */}
                            <label className="form-control w-full max-w-xs mt-6">
                                <div className="label">
                                    <span className="label-text">{t('Couleur secondaire')}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {/* Input Radio pour Rouge */}
                                    <input
                                        type="radio"
                                        id="secondaryRedColor"
                                        name="secondaryColor"
                                        value="red"
                                        className="hidden"
                                        {...register("secondaryColor")}
                                        checked={secondaryColor === 'red'}
                                        onChange={() => handleColorChange('red', 'secondary')}
                                    />
                                    <label
                                        htmlFor="secondaryRedColor"
                                        className={`w-8 h-8 rounded-full bg-red-500 cursor-pointer ${secondaryColor === 'red' ? 'ring-2 ring-red-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Bleu */}
                                    <input
                                        type="radio"
                                        id="secondaryBlueColor"
                                        name="secondaryColor"
                                        value="blue"
                                        className="hidden"
                                        {...register("secondaryColor")}
                                        checked={secondaryColor === 'blue'}
                                        onChange={() => handleColorChange('blue', 'secondary')}
                                    />
                                    <label
                                        htmlFor="secondaryBlueColor"
                                        className={`w-8 h-8 rounded-full bg-blue-500 cursor-pointer ${secondaryColor === 'blue' ? 'ring-2 ring-blue-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Vert */}
                                    <input
                                        type="radio"
                                        id="secondaryGreenColor"
                                        name="secondaryColor"
                                        value="green"
                                        className="hidden"
                                        {...register("secondaryColor")}
                                        checked={secondaryColor === 'green'}
                                        onChange={() => handleColorChange('green', 'secondary')}
                                    />
                                    <label
                                        htmlFor="secondaryGreenColor"
                                        className={`w-8 h-8 rounded-full bg-green-500 cursor-pointer ${secondaryColor === 'green' ? 'ring-2 ring-green-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Violet */}
                                    <input
                                        type="radio"
                                        id="secondaryPurpleColor"
                                        name="secondaryColor"
                                        value="purple"
                                        className="hidden"
                                        {...register("secondaryColor")}
                                        checked={secondaryColor === 'purple'}
                                        onChange={() => handleColorChange('purple', 'secondary')}
                                    />
                                    <label
                                        htmlFor="secondaryPurpleColor"
                                        className={`w-8 h-8 rounded-full bg-purple-500 cursor-pointer ${secondaryColor === 'purple' ? 'ring-2 ring-purple-500' : ''}`}
                                    ></label>

                                    {/* Input Radio pour Orange */}
                                    <input
                                        type="radio"
                                        id="secondaryOrangeColor"
                                        name="secondaryColor"
                                        value="orange"
                                        className="hidden"
                                        {...register("secondaryColor")}
                                        checked={secondaryColor === 'orange'}
                                        onChange={() => handleColorChange('orange', 'secondary')}
                                    />
                                    <label
                                        htmlFor="secondaryOrangeColor"
                                        className={`w-8 h-8 rounded-full bg-orange-500 cursor-pointer ${secondaryColor === 'orange' ? 'ring-2 ring-orange-500' : ''}`}
                                    ></label>

                                    {/* Sélecteur de couleur pour la couleur secondaire */}
                                    <input
                                        type="color"
                                        id="secondaryColorPicker"
                                        name="secondaryColorPicker"
                                        className={`w-8 h-8 p-0 border-none rounded-full cursor-pointer appearance-none ${customSecondaryColor ? 'ring-2 ring-gray-500' : ''}`}
                                        value={customSecondaryColor}
                                        onChange={(e) => {
                                            setCustomSecondaryColor(e.target.value);
                                            handleColorChange(e.target.value, 'secondary');
                                        }}
                                    />
                                </div>
                            </label>

                            <div className="card-actions justify-end mt-4">
                                <input className="btn btn-primary" type="submit" value={t('Suivant')} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />

            {/* CSS spécifique pour le sélecteur de couleur multicolore */}
            <style>
                {`
                input[type="color"] {
                    -webkit-appearance: none;
                    appearance: none;
                    padding: 0;
                    border: none;
                    width: 2rem;  /* Largeur du bouton */
                    height: 2rem; /* Hauteur du bouton */
                    border-radius: 50%; /* Forme ronde */
                    overflow: hidden;
                    cursor: pointer;
                }

                input[type="color"]::-webkit-color-swatch-wrapper {
                    padding: 0;
                    border-radius: 50%;
                }

                input[type="color"]::-webkit-color-swatch {
                    border: none;
                    border-radius: 50%;
                }

                /* Styles pour masquer les boutons radio par défaut */
                input[type="radio"] {
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                /* Anneau autour des boutons radio sélectionnés */
                .ring-2 {
                    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.25);
                }
                `}
            </style>
        </>
    );
}

export default Inscription_4;