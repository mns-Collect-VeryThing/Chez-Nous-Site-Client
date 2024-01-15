import React from 'react';
function Avantage({ avantage = "" }) {

    return (
        <div className="flex items-center space-x-2">
            <div
                className="flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <span>{avantage}</span>
        </div>
    );
}
export default Avantage;