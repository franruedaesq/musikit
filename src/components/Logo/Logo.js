import React from 'react';
import './Logo.scss'

const Logo = ({logo}) => {
    return (
        <div className="Logo">
            {logo && logo}
        </div>
    );
}

export default Logo;
