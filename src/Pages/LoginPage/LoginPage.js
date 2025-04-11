import './LoginPage.css';
import { useEffect } from 'react';
import duaLogo from '../../static/Logos/DUA_LOGO.png';
import Illustration from '../../static/Logos/mosque.png';
import googleIcon from '../../static/Logos/search.png';

function LoginPage() {
    useEffect(() => {
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        return () => window.removeEventListener('resize', setViewportHeight);
    }, []);

    return (
        <div className='login-page-container'>
            <div className='dua-illustration'>
                <img src={Illustration} alt="DUA Logo" />
            </div>
            <div className='dua-logo'>
                <img src={duaLogo} alt="DUA Logo" />
                <div className='dua-tagline'>
                    {'STAY CONNECTED TO ALLAH'.split(' ').map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </div>
            </div>
            <div className='sign-in-button'>
                <button className='button-dark'>
                    <img src={googleIcon} alt="Google icon" className='google-icon' /> Google Sign In
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
