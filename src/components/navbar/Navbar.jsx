import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar({ data }) {
    const [showMenu, setShowMenu] = useState(false);
    const btnMenuRef = useRef(null);
    const ulMenuRef = useRef(null);

    useEffect(() => {
        // Se ejecuta cuando se monta el componente
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        // Si el clic se hace fuera del menú, ocultarlo
        if (
            btnMenuRef.current &&
            !btnMenuRef.current.contains(event.target) &&
            ulMenuRef.current &&
            !ulMenuRef.current.contains(event.target)
        ) {
            setShowMenu(false);
        }
    };

    return (
        <nav className="Header-nav">
            <button ref={btnMenuRef} className="Header-hamburger" onClick={() => setShowMenu(!showMenu)}>
                <FaBars />
            </button>
            <ul ref={ulMenuRef} className={`Header-ul ${showMenu ? 'show' : ''}`}>
                {data.map(({ id, title, href }) => (
                    <li className="Header-li" key={id}>
                        <a className="Header-a" href={href}>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
