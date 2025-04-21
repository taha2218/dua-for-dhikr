import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

export const checkUserInFirestore = async (uid) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        return userSnap.data(); // Existing user
    }

    return null; // New user
};

export const createUserInFirestore = async (uid, data) => {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, data);
};

export const getAllUsersFromFirestore = async () => {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);

    const users = [];
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });
    
    return users;
};