import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import {home, search, library, spotify} from '../../assets/icons'

const SideMenu = () => {
    return (
        <Menu>
            <Logo logo={spotify}/>
            <Button status='active' text='Inicio' icon={home} />
            <Button  text='Buscar' icon={search} />
            <Button  text='Tu Biblioteca' icon={library} />
        </Menu>
    );
}

export default SideMenu;
