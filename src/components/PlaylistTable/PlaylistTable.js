import React from 'react';
import './PlaylistTable.scss'
import {clock} from '../../assets/icons'

const PlaylistTable = ({children}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>TÍTULO</th>
                    <th>ÁLBUM</th>
                    <th>AGREGADO EL</th>
                    <th>{clock}</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default PlaylistTable;
