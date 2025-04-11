import './LoginPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../Firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import duaLogo from '../../static/Logos/DUA_LOGO.png';
import Illustration from '../../static/Logos/mosque.png';
import googleIcon from '../../static/Logos/search.png';

function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('duaUser');
        if (storedUser) {
            navigate('/home');
        }

        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        return () => window.removeEventListener('resize', setViewportHeight);
    }, [navigate]);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userInfo = {
                name: user.displayName,
                email: user.email,
                uid: user.uid,
            };

            localStorage.setItem('duaUser', JSON.stringify(userInfo));
            navigate('/home');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className='login-page-container'>
            <div className='dua-illustration'>
                <img src={Illustration} alt="Mosque Illustration" />
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
                <button className='button-dark' onClick={handleGoogleSignIn}>
                    <img src={googleIcon} alt="Google icon" className='google-icon' /> Google Sign In
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
