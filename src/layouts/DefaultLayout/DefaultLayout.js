import PropTypes from 'prop-types';
import { useWindowDimensions } from '~/hooks';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';
import Wrapper from '~/layouts/components/Wrapper';
import Navbar from './Navbar';

const DefaultLayout = ({ children }) => {
    const { width } = useWindowDimensions();
    const isMinLg = width >= 1024;

    return (
        <Wrapper>
            <Header />
            <div className="flex-1 flex pt-[var(--header-pc-height)]">
                {isMinLg && <Navbar />}
                <div
                    className={`max-w-[1920px] ${
                        isMinLg
                            ? 'pl-7 pr-10 w-[calc(100vw_-_var(--navbar-width))]'
                            : 'px-[15px] lg:px-5 w-screen'
                    } mt-4 mx-auto pb-20`}
                >
                    {children}
                </div>
            </div>
            <Footer />
        </Wrapper>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
