import React from 'react';

const Input = ({ type, className, event, name }) => {
    if (type === "text" || type === "email" || type === "password") {
        return (
            <div className="form-group">
                <input type={type} className={className} onChange={event} placeholder={name} />
            </div>
        )
    } else if (type === "button") {
        return (
            <div className="form-group">
                <button className={className} onClick={event}>{name}</button>
            </div>
        )
    }
}

export default Input;