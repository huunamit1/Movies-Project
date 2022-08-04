import { ButtonLogin } from '~/components/Button';
import { UserIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

const Email = (props) => {
    return (
        <ButtonLogin icon={UserIcon} {...props}>
            Use Email
        </ButtonLogin>
    );
};

Email.propTypes = {
    onClick: PropTypes.func,
};

export default Email;
