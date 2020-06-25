import React from 'react';

const ErrorMessage = ({ errMsg }) => {
    if (errMsg) {
        return (
            <p className="text-center text-danger">{errMsg}</p>
        )
    }
    return null;
}

export default ErrorMessage;