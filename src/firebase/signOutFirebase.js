import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const signOutFirebase = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error(error.message);
    }
};

export default signOutFirebase;
