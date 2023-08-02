import React from 'react';

const UtiltiyButton = ({ text_color, bg_color, hover_color, width, onClick, text }) => {

    let buttonClass = `
    px4
    py-2
    rounded-md
    mx-4
    ${width}
    ${text_color} 
    ${bg_color} 
    ${hover_color}
    `;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default UtiltiyButton;