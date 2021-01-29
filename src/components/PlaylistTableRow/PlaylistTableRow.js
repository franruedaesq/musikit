import React from 'react';
import './PlaylistTableRow.scss'

const PlaylistTableRow = ({number, title, album, added_at, duration, artists}) => {
    console.log(number)
    return (
        <tr>
            <td>{number}</td>
            <td>{title}</td>
            <td>{album}</td>
            <td>{added_at}</td>
            <td>{duration}</td>
      </tr>
    );
}

export default PlaylistTableRow;
