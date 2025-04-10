import './LoginPage.css';
import duaLogo from '../../static/Logos/DUA_LOGO.png';
import { ReactComponent as Illustration } from '../../static/svg/illustration.svg';
import googleIcon from '../../static/Logos/search.png';

function LoginPage() {
    return (
        <div className='login-page-container'>
            <div className='dua-illustration'>
                <Illustration />
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
