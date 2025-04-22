import React from 'react';
import './DhikrCard.css';

const DhikrCard = ({ arabic, transliteration }) => {
    return (
        <div className="dhikr-card">
            <div className="transliteration">{transliteration}</div>
            <div className="arabic">{arabic}</div>
        </div>
    );
};

export default DhikrCard;
