import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import { signOut } from 'firebase/auth';
import './Navbar.css';

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('duaUser');
        navigate('/');
    };


    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <GiHamburgerMenu size={20} />
            </div>
            <div className="navbar-center">
                <span className="navbar-title">Dua For Dhikr</span>
            </div>
            <div className="navbar-right">
                <FiLogOut size={20} />
            </div>
        </div>
    );
}

export default Navbar;
