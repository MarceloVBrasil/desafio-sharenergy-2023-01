import "./NavBarMenu.scss";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBarMenuType } from "../../types/navbarMenu";

function NavBarMenu({ show, setShowModal }: NavBarMenuType) {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const tabletWidth = 768

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        if (windowWidth >= tabletWidth)
            setShowModal(false)
    }, [windowWidth])

    if (!show) {
        return null
    };

    return ReactDOM.createPortal(
        <section>
            <div className='modal-container'>
                <div className='modal'>
                    <div className='modal-header'>
                        <p onClick={handleCloseModal}>&times;</p>
                    </div>
                    <div className='modal-body'>
                        <NavLink to="/cats" onClick={handleCloseModal} className='modal-body__text'><p>Cats</p></NavLink>
                        <NavLink to="/dogs" onClick={handleCloseModal} className='modal-body__text'><p>Dogs</p></NavLink>
                        <NavLink to="/clients" onClick={handleCloseModal} className='modal-body__text'><p>Clients</p></NavLink>
                    </div>
                </div>
            </div>
            <div className='overlay'></div>
        </section>,
        document.getElementById('root')!
    )

    function handleCloseModal(): void {
        setShowModal(false)
    }
}

export default NavBarMenu;