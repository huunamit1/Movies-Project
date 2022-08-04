import PropTypes from 'prop-types';

const Label = ({ htmlFor = '', children }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="cursor-pointer font-semibold text-sm"
        >
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Label;
