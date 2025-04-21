import { auth, provider } from '../Firebase/firebase';
import { signInWithPopup } from 'firebase/auth';

export const googleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        return {
            name: user.displayName,
            email: user.email,
            uid: user.uid
        };
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
