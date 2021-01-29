import React, { useState } from 'react';
import './Menu.scss'

const Menu = ({children}) => {

    const [showMenu, setShowMenu]  = useState(false)
    const [showMenuClass, setShowMenuClass]  = useState('')

    const toggleMenu = () => {
        if (!showMenu) {
            console.log(showMenu)
            setShowMenuClass('show')
            setShowMenu(true)
        } else {
            console.log(showMenu)
            setShowMenuClass('hidden')
            setShowMenu(false)
        }
    }
    return (
        <nav className={`Menu ${showMenuClass}`}>
            <div className="Menu__header">
                <button onClick={() => toggleMenu()} className="Menu__hamburguer-btn"></button>
            </div>
            {children}
        </nav>
    );
}

export default Menu;
