import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LogoIcon } from '~/components/Icons';
import config from '~/config';

const Logo = ({ className = '', textColor = 'black', onClick = () => {} }) => {
    return (
        <div className={`${className} flex items-center`}>
            <Link onClick={onClick} to={config.routes.home}>
                <LogoIcon width="38px" height="38px" />
            </Link>
            <h5 className={`ml-4 font-bold text-sm text-${textColor}`}>
                WMovies
            </h5>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    textColor: PropTypes.string,
};

export default Logo;
