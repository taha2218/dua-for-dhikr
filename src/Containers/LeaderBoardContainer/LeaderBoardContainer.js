import React from 'react';
import './LeaderBoardContainer.css';
import LeaderboardTable from '../../Common/LeaderBoardTable/LeaderboardTable';

const mockData = [
    { rank: 1, name: 'Ahmed Khan', count: 124, countryCode: 'SA' },
    { rank: 2, name: 'Fatima Noor', count: 119, countryCode: 'BH' },
    { rank: 3, name: 'Omar Ali', count: 110, countryCode: 'EG' },
    { rank: 4, name: 'Ayesha Rahman', count: 105, countryCode: 'IN' },
    { rank: 5, name: 'Mohammad Taha', count: 98, countryCode: 'PK' },
];

function LeaderBoardContainer() {
    return (
        <div className="leaderboard-container">
            <LeaderboardTable data={mockData} />
        </div>
    );
}

export default LeaderBoardContainer;
