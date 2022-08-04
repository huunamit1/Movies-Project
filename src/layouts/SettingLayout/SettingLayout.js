import PropTypes from 'prop-types';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';
import Wrapper from '~/layouts/components/Wrapper';
import Navbar from './Navbar';

const SettingLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header></Header>
            <div className="flex-1 px-[15px] lg:pr-0 gx:pl-0 w-full max-w-7xl mx-auto mb-10 pt-[calc(var(--header-pc-height)+20px)] flex flex-wrap justify-center gap-5">
                <Navbar className="w-full lg:w-3/12" />
                <div className="w-full lg:w-8/12">{children}</div>
            </div>
            <Footer />
        </Wrapper>
    );
};

SettingLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SettingLayout;
