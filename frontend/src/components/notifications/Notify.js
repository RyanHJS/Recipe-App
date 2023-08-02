import React from 'react';

const Notify = ({ message, backgroundColor }) => {
    return (
        <div
            className={`px-4 py-4 text-center text-white ${backgroundColor} rounded-md`}
        >
            {message}
        </div>
    );
};

export default Notify;