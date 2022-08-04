import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import config from '~/config';
import { db, signInWithFacebook } from '~/firebase/firebaseConfig';

// FIXME Can only login with Facebook admin

const useSignInWithFacebook = () => {
    const navigate = useNavigate();

    return async () => {
        try {
            const result = await signInWithFacebook();
            const user = result.user;

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                name: user.displayName,
                createdAt: serverTimestamp(),
            });

            toast.success('Login successfully!');
            navigate(config.routes.home);
        } catch (error) {
            toast.error(error.message);
        }
    };
};

export default useSignInWithFacebook;
