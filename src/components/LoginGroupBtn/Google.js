import { ButtonLogin } from '~/components/Button';
import { GoogleIcon } from '~/components/Icons';

const Google = ({ onClick = () => {} }) => {
    return (
        <ButtonLogin icon={GoogleIcon} onClick={onClick}>
            Continue with Google
        </ButtonLogin>
    );
};

export default Google;
