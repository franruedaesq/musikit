import React from 'react';
import './ListContainer.scss'

const ListCointainer = ({title, children}) => {
    return (
        <section className="ListCointainer">
            <div className="ListCointainer__header">
                <div>{title && <h2>{title}</h2>}</div>
                <button>VER TODO</button>
            </div>
            <div className="ListCointainer__container">
                 {children}
            </div>
        </section>
    );
}

export default ListCointainer;
