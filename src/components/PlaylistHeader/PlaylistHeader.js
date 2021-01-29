import React from 'react';
import './PlaylistHeader.scss';

const PlaylistHeader = ({color, img_url, name, tracks_total, owner, description}) => {
    return (
        <div className="PlaylistHeader" style={{background: `linear-gradient(180deg, ${color} 0%, #121212 100%)`}}>
            <img src={img_url} className="PlaylistHeader__img" alt=""/>
            <div className='PlaylistHeader__body'>
                <span className="PlaylistHeader__text-small">PLAYLIST</span>
                <span className="PlaylistHeader__title">{name}</span>
                <span className="PlaylistHeader__text-medium">{description}</span>
                <div className="PlaylistHeader__footer">
                    <span className="PlaylistHeader__text-medium">{owner}</span>
                    <span className="PlaylistHeader__text-medium grey ml">&#x02022; {tracks_total} canciones</span>
                </div>


            </div>
        </div>
    );
}

export default PlaylistHeader;
