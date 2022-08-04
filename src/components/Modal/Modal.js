import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            {children}
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
