import { v4 } from 'uuid';
import NavbarMobileItem from './NavbarMobileItem';

const NavbarMobileMenu = ({ menu }) => {
    return (
        <div className="border-t border-[rgba(0,0,0,.079)]">
            {menu.map((item) => (
                <NavbarMobileItem data={item} key={v4()} />
            ))}
        </div>
    );
};

export default NavbarMobileMenu;
