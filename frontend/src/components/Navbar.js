import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { SearchBar } from './SearchBar';
import './Navbar.css';

//after /ul     {button && <Button buttonStyle='btn--outline'>Search:       </Button>}

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }

    };

    //this fixes a bug where tabs reappear when website is refreshed
    useEffect(() => {
        showButton();
    }, []);


    //this fixes a issue where the screen wouldnt resize
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>

                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Color Scheme Tool <i className='fab fa-typo2' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/project-guidlines' className='nav-links' onClick={closeMobileMenu}>
                                Project Guidlines
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/results' className='nav-links' onClick={closeMobileMenu}>
                                Results
                            </Link>
                        </li>


                    </ul>


                </div>
            </nav>
        </>
    );
}

export default Navbar;
