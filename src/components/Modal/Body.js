import PropTypes from 'prop-types';

const Body = ({ children }) => {
    return <section className="p-4 bg-white rounded-b-lg">{children}</section>;
};

Body.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Body;
