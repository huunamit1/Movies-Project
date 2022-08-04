import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { HomeSolidIcon, TVIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Navbar.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);

const navbar = [
    {
        to: config.routes.home,
        icon: HomeSolidIcon,
        title: 'Home',
    },
    {
        to: config.routes.tv,
        icon: TVIcon,
        title: 'TV',
    },
];

const Navbar = ({ className = '' }) => {
    return (
        <div>
            <div
                className={`${cx('navbar', {
                    [className]: className,
                })} flex-shrink-0 px-2 py-4 sticky top-[var(--header-pc-height)]`}
            >
                {navbar?.map((item) => (
                    <NavItem key={v4()} to={item.to} icon={item.icon}>
                        {item.title}
                    </NavItem>
                ))}
            </div>
        </div>
    );
};

Navbar.propTypes = {
    className: PropTypes.string,
};

export default Navbar;
