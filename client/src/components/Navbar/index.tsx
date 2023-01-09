import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/images/logo.png"
import "./Navbar.scss"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../contextAPI/UserProvider';
import NavBarMenu from '../NavBarMenu';

export default function Navbar() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { loggedIn, logOut, rememberMe } = useUser()
    return (
        <div className='navbar'>
            <NavBarMenu show={showModal} setShowModal={setShowModal} />
            <NavLink to="/"><img src={logo} alt="logo" className='navbar__logo' /></NavLink>
            <div className='navbar-links'>
                {loggedIn || rememberMe ? <NavLink to="/">
                    <LogoutIcon className="navbar-links__link navbar-links__link--logout" onClick={logOut} />
                </NavLink> : ''}
                <MenuIcon className='navbar-links__menu' onClick={() => setShowModal(true)} />
                <NavLink to="/cats" className="navbar-links__link">Cats</NavLink>
                <NavLink to="/dogs" className="navbar-links__link">Dogs</NavLink>
                <NavLink to="/clients" className="navbar-links__link">Clients</NavLink>
            </div>
        </div>
    )
}
