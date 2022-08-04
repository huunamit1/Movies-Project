import { NavLink } from 'react-router-dom';

const NavbarItem = ({ className = '', icon, to, children }) => {
    const Icon = icon;

    return (
        <li className={className}>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `${
                        isActive ? 'text-primary' : 'text-[#828282]'
                    } px-4 py-2 flex items-end`
                }
            >
                <Icon className="w-[22px] h-[22px] mr-[10px]" />
                <span className="font-bold text-sm">{children}</span>
            </NavLink>
        </li>
    );
};

export default NavbarItem;
