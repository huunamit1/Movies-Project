import React from 'react';
import { NavLink } from 'react-router-dom';
import useNavbarMobile from '~/context/NavbarMobile';

const NavbarMobileItem = ({ data }) => {
    const Icon = data.icon;
    const { onCloseNavbarMobile } = useNavbarMobile();

    const handleClick = () => {
        onCloseNavbarMobile();
        data.onClick?.();
    };

    return (
        <NavLink
            onClick={handleClick}
            className={({ isActive }) =>
                `flex p-5 ${
                    isActive ? 'text-[#292929] bg-[#f0f0f0]' : 'text-[#333]'
                } hover:text-[#292929] hover:bg-[#f0f0f0] transition-all duration-300 rounded-[5px]`
            }
            to={data.to}
        >
            <Icon className="w-5 h-5 mr-4" />
            <span>{data.title}</span>
        </NavLink>
    );
};

export default NavbarMobileItem;
