import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiMenuUnfold2Line } from "react-icons/ri";
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import './Navbar.css';

const menuItems = [
    { id: 'menu-home', name: 'Home', path: '/home' },
    { id: 'menu-duas', name: 'Duas', path: '/duas' }
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('duaUser');
        navigate('/');
    };

    const handleNavigate = (path) => {
        navigate(path);
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left" onClick={() => setIsSidebarOpen(true)}>
                    <GiHamburgerMenu size={18} />
                </div>
                <div className="navbar-center">
                    <span className="navbar-title">Dua For Dhikr</span>
                </div>
                <div className="navbar-right">
                    <FiLogOut size={18} onClick={handleLogout} />
                </div>
            </div>

            {isSidebarOpen && (
                <>
                    <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
                    <div className="sidebar">
                        <ul className="sidebar-menu">
                            <li className='menu-header'>
                                <span>Menu</span>
                                <button className="close-menu-btn" onClick={() => setIsSidebarOpen(false)}>
                                    <RiMenuUnfold2Line size={18} className="close-icon" />
                                </button>
                            </li>
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    id={item.id}
                                    className={location.pathname === item.path ? 'active-menu-item' : ''}
                                    onClick={() => handleNavigate(item.path)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
}

export default Navbar;
