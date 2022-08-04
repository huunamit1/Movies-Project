import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '~/config';
import { db, signInWithGoogle } from '~/firebase/firebaseConfig';

const useSignInWithGoogle = () => {
    const navigate = useNavigate();

    return async () => {
        try {
            const result = await signInWithGoogle();
            const user = result.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                name: user.displayName,
                createdAt: serverTimestamp(),
                provider: 'google',
            });

            toast.success('Login successfully!');
            navigate(config.routes.home);
        } catch (error) {
            toast.error(error.message);
        }
    };
};

export default useSignInWithGoogle;
