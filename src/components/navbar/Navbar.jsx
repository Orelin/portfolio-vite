import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
function Navbar({ data }) {
    const [showMenu, SetShowMenu] = useState(false);
    const changeMenu = () => {
        return SetShowMenu(!showMenu);
    };

    return (
        <nav className="Header-nav">
            <button className="Header-hamburger" onClick={changeMenu}>
                <FaBars />
            </button>
            <ul className={`Header-ul ${showMenu ? 'show' : ''}`}>
                {data.map(({ id, title, url }) => (
                    <li className="Header-li" key={id}>
                        <a className="Header-a" href={url}>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
