import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './DhikrCard.css';

const DhikrCard = (props) => {
    const { id, arabic, transliteration } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/dua-detail/${id}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            className="dhikr-card"
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={{ cursor: 'pointer' }}
        >
            <div className="transliteration">{transliteration}</div>
            <div className="arabic">{arabic}</div>
        </div>
    );
};

DhikrCard.propTypes = {
    id: PropTypes.string.isRequired,
    arabic: PropTypes.string.isRequired,
    transliteration: PropTypes.string.isRequired,
};

export default DhikrCard;
