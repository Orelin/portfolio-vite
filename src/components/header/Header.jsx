import { useContext } from 'react';
import { GlobalContext } from '../../../src/provider/Provider';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import './Header.scss';

function Header() {
    const { header } = useContext(GlobalContext);
    const { menu, rrss } = header; // rrss seran visibles en el footer

    return (
        <div className="Header" id='Header'>
            <Logo />
            <Navbar data={menu} />
        </div>
    );
}

export default Header;
