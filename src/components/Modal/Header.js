import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <header className="bg-slate-200 font-semibold text-center text-2xl p-4 rounded-t-lg">
            {children}
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
