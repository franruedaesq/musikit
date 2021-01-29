import React from 'react';
import './PlaylistContainer.scss'


const PlaylistContainer = ({children}) => {

    return (
        <div className="PlaylistContainer">
            {children}
        </div>
    );
}

export default PlaylistContainer;
