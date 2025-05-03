import React from 'react';
import DhikrCard from './DhikrCard';
import './DuasContainer.css';
import dhikrList from '../../Data/Dhikr.json';

function DuasContainer() {
    return (
        <div className="duas-container">
            <hr className="divider" />
            {dhikrList.map((dhikr) => (
                <React.Fragment key={dhikr.id}>
                    <DhikrCard
                        id={dhikr?.id}
                        arabic={dhikr?.arabic}
                        transliteration={dhikr?.transliteration}
                    />
                    <hr className="divider" />
                </React.Fragment>
            ))}
        </div>
    );
}

export default DuasContainer;
