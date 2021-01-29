import React from 'react';
import './Button.scss'

const Button = ({icon, text, status}) => {

    if (icon) {
        return (
            <button className={`Button ${status}`}>
                {icon}
                <span className="Button__text">{text}</span>
        </button>
        )
    }
    return (
        <button className={`Button ${status}`}>
            <span className="Button__text">{text}</span>
        </button>
    );
}

export default Button;
