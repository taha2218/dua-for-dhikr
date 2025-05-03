import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlay } from 'react-icons/fa';
import './Taskbar.css';

function Taskbar({ language, setLanguage, showPlayButton = false }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="taskbar-container">
            <div
                className="taskbar-left"
                onClick={handleBack}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleBack()}
            >
                <FaArrowLeft size={16} />
            </div>

            <div className="taskbar-center">
                {!showPlayButton ? (
                    <>
                        <button
                            className={`lang-toggle-btn ${language === 'english' ? 'selected' : ''}`}
                            onClick={() => setLanguage('english')}
                        >
                            English
                        </button>
                        <button
                            className={`lang-toggle-btn ${language === 'arabic' ? 'selected' : ''}`}
                            onClick={() => setLanguage('arabic')}
                        >
                            العربية
                        </button>
                    </>
                ) : (
                    <div className='start-dhikr'>
                        <div>Start Dhikr</div>
                        <FaPlay size={14} />
                    </div>
                )}
            </div>

            {/* Optional: Keep right side empty or remove entirely */}
            <div className="taskbar-right" />
        </div>
    );
}

export default Taskbar;
