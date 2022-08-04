import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackModal from '~/components/BackModal';
import Button from '~/components/Button';
import { LogoIcon } from '~/components/Icons';
import LoginGroupBtn from '~/components/LoginGroupBtn';
import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import RegisterWithEmail from '~/components/RegisterWithEmail';
import config from '~/config';
import useAuth from '~/context/Auth';
import signOutFirebase from '~/firebase/signOutFirebase';
import { useSignInWithGoogle } from '~/hooks';
import useSignInWithFacebook from '~/hooks/useSignInWithFacebook';

const RegisterPage = () => {
    const handleSignInWithGoogle = useSignInWithGoogle();
    const handleSignInWithFacebook = useSignInWithFacebook();
    const [registerMenu, setRegisterMenu] = useState(() => [
        <>
            <LoginGroupBtn className="mt-[14px]">
                <LoginGroupBtn.Email
                    onClick={() => {
                        setRegisterMenu((prev) => [
                            ...prev,
                            <RegisterWithEmail />,
                        ]);
                    }}
                />
                <LoginGroupBtn.Google onClick={handleSignInWithGoogle} />
                <LoginGroupBtn.Facebook onClick={handleSignInWithFacebook} />
            </LoginGroupBtn>
        </>,
    ]);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        document.title = 'Sign up for an account WMovies';
    }, []);

    return (
        <BackModal
            onBack={() => {
                setRegisterMenu((prev) => prev.slice(0, prev.length - 1));
            }}
            isShowBack={registerMenu.length > 1}
        >
            {user && (
                <Portal>
                    <Modal>
                        <div className="w-full max-w-[600px] m-4">
                            <Modal.Header>Notification</Modal.Header>
                            <Modal.Body>
                                <div className="text-center">
                                    You are logged in. Do you want to&nbsp;
                                    <strong>register a new account</strong>?
                                </div>
                                <div className="mt-5 flex flex-wrap gap-[15px] justify-center">
                                    <Button
                                        onClick={() =>
                                            navigate(config.routes.home)
                                        }
                                        primary
                                    >
                                        Home
                                    </Button>
                                    <Button
                                        onClick={() => navigate(-1)}
                                        primary
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() => signOutFirebase()}
                                        outline
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </Modal.Body>
                        </div>
                    </Modal>
                </Portal>
            )}
            <header>
                <div className="text-center">
                    <Link className="inline-flex" to={config.routes.home}>
                        <LogoIcon className="flex w-11 h-11" />
                    </Link>
                </div>
                <h1 className="text-text mt-[21px] font-bold text-[28px] text-center leading-snug">
                    Sign up for an account WMovies
                </h1>
            </header>

            <section className="pt-[37px]">
                {registerMenu[registerMenu.length - 1]}
            </section>

            <footer className="mt-8 text-center">
                <div className="text-sm leading-relaxed">
                    <span>Do you already have an account?</span>
                    &nbsp;
                    <Link
                        className="font-semibold text-primary"
                        to={config.routes.login}
                    >
                        Login
                    </Link>
                </div>
            </footer>
        </BackModal>
    );
};

export default RegisterPage;
