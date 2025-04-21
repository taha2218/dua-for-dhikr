import { useEffect, useState } from 'react';
import { auth } from '../../Firebase/firebase';
import { checkUserInFirestore, createUserInFirestore } from '../../Actions/UserActions';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../../Common/Navbar/Navbar';
import LeaderBoardContainer from '../../Containers/LeaderBoardContainer/LeaderBoardContainer';
import UserDetailsDialog from '../../Containers/UserDetailDialogBox/UserDetailsDialog';

import './HomePage.css';

function HomePage() {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const existingUser = await checkUserInFirestore(user.uid);
                if (existingUser) {
                    // Optional: set user to state if needed
                } else {
                    setShowDialog(true);
                }
            }
        });

        return () => unsubscribe(); // Clean up listener on unmount
    }, []);

    const handleSaveUserDetails = async ({ name, country }) => {
        const currentUser = auth.currentUser;
        if (!currentUser) return;

        const userData = {
            uid: currentUser.uid,
            name,
            country,
            email: currentUser.email,
        };

        try {
            await createUserInFirestore(currentUser.uid, userData);
            setShowDialog(false); // Close dialog only if success
        } catch (error) {
            console.error("Failed to save user details:", error);
            // Optionally, show an error toast or message to the user here
        }
    };

    return (
        <div className='homepage-container'>
            <Navbar />
            <LeaderBoardContainer />
            {showDialog && <UserDetailsDialog onSave={handleSaveUserDetails} />}
        </div>
    );
}

export default HomePage;
