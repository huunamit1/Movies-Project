import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const HeaderLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="mt-[calc(var(--header-pc-height)+20px)]">
                {children}
            </div>
            <Footer />
        </div>
    );
};

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
