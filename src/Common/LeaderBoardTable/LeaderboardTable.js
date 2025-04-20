import React from 'react';
import './LeaderboardTable.css';

function LeaderboardTable({ data }) {
    return (
        <div className="leaderboard-table">
            <div className="leaderboard-header">
                <div className="rank-col">#</div>
                <div className="name-col">Name</div>
                <div className="count-col">Count</div>
            </div>
            {data.map((user) => (
                <div className="leaderboard-row" key={user.rank}>
                    <div className="rank-col">{user.rank}</div>
                    <div className="name-col">
                        <img
                            src={`https://flagcdn.com/w40/${user.countryCode.toLowerCase()}.png`}
                            alt={`${user.countryCode} flag`}
                            className="flag-img-inline"
                        />
                        {user.name}
                    </div>
                    <div className="count-col">{user.count}</div>
                </div>
            ))}
        </div>
    );
}

export default LeaderboardTable;
