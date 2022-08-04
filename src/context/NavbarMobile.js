import { createContext, useContext } from 'react';

const NavbarMobileContext = createContext();

function NavbarMobileProvider(props) {
    return <NavbarMobileContext.Provider {...props} />;
}

function useNavbarMobile() {
    return useContext(NavbarMobileContext);
}

export default useNavbarMobile;

export { NavbarMobileProvider };
