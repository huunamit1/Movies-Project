import Tippy from '@tippyjs/react/headless';
import { memo, useCallback, useState } from 'react';
import Avatar from '~/components/Avatar';
import useAuth from '~/context/Auth';
import UserActionsPopup from './UserActionsPopup';

const UserActions = () => {
    const [show, setShow] = useState(false);
    const { user } = useAuth();

    const handleClickAvatar = useCallback(() => setShow((show) => !show), []);
    const handleClickMenu = () => setShow(false);

    return (
        <Tippy
            visible={show}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <UserActionsPopup onClick={handleClickMenu} {...attrs} />
            )}
            onClickOutside={() => setShow(false)}
        >
            <Avatar
                className="w-avatar h-avatar cursor-pointer"
                alt="Avatar"
                src={user?.avatar?.url ?? user?.photoURL}
                onClick={handleClickAvatar}
            ></Avatar>
        </Tippy>
    );
};

export default memo(UserActions);
