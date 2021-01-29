import React from 'react';
import './HomeContainer.scss'

const HomeContainer = ({children}) => {
    return (
        <div className="HomeContainer">
            {children}
        </div>
    );
}

export default HomeContainer;
