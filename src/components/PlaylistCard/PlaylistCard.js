import React from 'react';
import './PlaylistCard.scss'

const PlaylistCard = ({name, description, imageUrl}) => {
    return (
        <article className="PlaylistCard">
            <img src={`${imageUrl}`} alt="" className="PlaylistCard__img"/>
            <h3 className="PlaylistCard__title">{name}</h3>
            <p className="PlaylistCard__description">{description}</p>
        </article>
    );
}

export default PlaylistCard;
