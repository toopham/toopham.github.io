import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick= () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i className='fas fa-user' /> {button ? 'Tu Pham' : ' 2Pham'} 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-rocket'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Math Things
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li >
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Resume/CV
                            </Link>
                        </li>
                    </ul>
                    <Link to='/resume' className='btn-mobile'>
                        {button && <Button buttonStyle='btn--outline'>Resume/CV</Button>}
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar
