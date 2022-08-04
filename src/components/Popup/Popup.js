import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popup.module.scss';

const cx = classNames.bind(styles);

const Popup = ({ children, ...props }) => {
    return (
        <div
            {...props}
            className={`${cx(
                'popup',
            )} rounded-[10px] bg-white shadow-[0_-4px_32px_rgb(0,_0,_0,_0.2)]`}
        >
            {children}
        </div>
    );
};

Popup.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Popup;
