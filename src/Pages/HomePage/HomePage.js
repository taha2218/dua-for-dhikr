import Navbar from '../../Common/Navbar/Navbar';
import LeaderBoardContainer from '../../Containers/LeaderBoardContainer/LeaderBoardContainer';
import UserDetailsDialog from '../../Containers/UserDetailDialogBox/UserDetailsDialog';
import { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [user, setUser] = useState({ name: '' });

    const handleSaveUserDetails = ({ name, country }) => {
        setUser({ name, country });
        // Save to localStorage or wherever you need
    };

    return (
        <div className='homepage-container'>
            <Navbar />
            <LeaderBoardContainer />
            {user.name === '' && <UserDetailsDialog onSave={handleSaveUserDetails} />}
        </div>
    );
}

export default HomePage;
