import React, { useEffect } from 'react';
import './LoadingPage.css';

function LoadingPage() {
    useEffect(() => {
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);

        return () => {
            window.removeEventListener('resize', setViewportHeight);
        };
    }, []);

    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
}

export default LoadingPage;
