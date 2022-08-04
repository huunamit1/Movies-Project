import { Link } from 'react-router-dom';
import Portal from '~/components/Portal';
import config from '~/config';
import Modal from '../Modal';

const RequestLogin = () => {
    return (
        <Portal>
            <div
                style={{
                    backgroundImage: 'url(/Netflix.jpg)',
                }}
                className="flex items-center justify-center z-full fixed inset-0 w-screen h-screen bg-cover bg-center"
            >
                <div className="w-full max-w-[600px] m-4 shadow-lg">
                    <Modal.Header>Notification</Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            Please{' '}
                            <Link
                                className="text-primary"
                                to={config.routes.login}
                            >
                                <strong>log in</strong>
                            </Link>{' '}
                            or{' '}
                            <Link
                                className="text-primary"
                                to={config.routes.login}
                            >
                                <strong>register</strong>
                            </Link>{' '}
                            for an account to see more of this content!
                        </div>
                    </Modal.Body>
                </div>
            </div>
        </Portal>
    );
};

export default RequestLogin;
