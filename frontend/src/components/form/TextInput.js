import React from 'react';

const TextInput = ({ label, name, id, value, onChange, resize_or_not }) => {

    // Dynamically determine whether to resize the textarea or not
    const textAreaClass = resize_or_not ?
        "border border-black rounded-md w-full resize"
        :
        "border border-black rounded-md w-full resize-none";

    return (
        <div
            className="
            mx-auto
            my-5
            "
        >
            <label
                className="
                text-left
                block 
                text-lg 
                font-medium
                text-gray-700 mb-1
                "
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                className={textAreaClass}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
            >
            </textarea>
        </div >
    );
};

export default TextInput;
