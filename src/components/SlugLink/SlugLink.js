import { Link } from 'react-router-dom';
import slugify from 'slugify';
import PropTypes from 'prop-types';

const SlugLink = ({ to, children, className = '' }) => {
    const slug = slugify(children, {
        locale: 'vi',
        lower: true,
        strict: true,
    });

    return (
        <Link
            className={
                className +
                "transition-all duration-200 hover:text-primary not-last-child:after:content-[',_']"
            }
            to={to ?? `/${slug}`}
        >
            {children}
        </Link>
    );
};

SlugLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default SlugLink;
