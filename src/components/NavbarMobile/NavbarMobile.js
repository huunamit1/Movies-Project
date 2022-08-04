import { HomeSolidIcon, TVIcon } from '~/components/Icons';
import Logo from '~/components/Logo';
import config from '~/config';
import useNavbarMobile from '~/context/NavbarMobile';
import { useWindowDimensions } from '~/hooks';
import NavbarMobileMenu from './NavbarMobileMenu';

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

const NavbarMobile = () => {
    const { width } = useWindowDimensions();
    const { onCloseNavbarMobile, isShowNavbarMobile } = useNavbarMobile();
    const isMinXs = width >= 350;

    return (
        <div
            onClick={onCloseNavbarMobile}
            className={`${
                isShowNavbarMobile
                    ? 'visible opacity-100'
                    : 'invisible opacity-0'
            } z-100 fixed inset-0 bg-[rgba(0,0,0,0.3)] transition-all duration-500 ease-ease`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                    isShowNavbarMobile ? 'translate-x-0' : '-translate-x-full'
                } absolute top-0 left-0 bottom-0 w-3/5 bg-white transition-all duration-500 ease-ease`}
            >
                <div
                    className={`py-4 ${
                        isMinXs ? 'pl-8' : 'pl-4'
                    } overflow-auto max-h-full`}
                >
                    <Logo onClick={onCloseNavbarMobile} className="my-8 ml-5" />
                    <NavbarMobileMenu menu={navbar} />
                </div>
            </div>
        </div>
    );
};

export default NavbarMobile;
