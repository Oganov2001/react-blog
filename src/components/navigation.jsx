import { useState } from 'react';

const Navigation = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-menu">
            <button className='nav-button' onClick={toggleNavigation}>Menu</button>

            <nav style={{ display: isOpen ? 'block' : 'none' }}>
                <h2>Menu</h2>

                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;