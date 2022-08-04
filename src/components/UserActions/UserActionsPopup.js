import { signOut } from 'firebase/auth';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import Avatar from '~/components/Avatar';
import Popup from '~/components/Popup';
import config from '~/config';
import useAuth from '~/context/Auth';
import { auth } from '~/firebase/firebaseConfig';
import UserActionsPopupMenu from './UserActionsPopupMenu';

const UserActionsPopup = (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const menuProfile = useMemo(
        () => [
            {
                to: config.routes.personalInformation,
                title: 'Personal information',
            },
            {
                title: 'Logout',
                onClick: async () => {
                    signOut(auth);
                    navigate(config.routes.login);
                },
            },
        ],
        [navigate],
    );

    const actionsMenu = useMemo(
        () => [
            {
                title: 'Favorite',
                to: config.routes.favorite,
            },
        ],
        [],
    );

    return (
        <Popup {...props}>
            <div className="py-2 px-6">
                <header className="flex gap-3 items-center">
                    <Avatar
                        className="w-[50px] h-[50px] my-[10px]"
                        alt="Avatar"
                        src={user?.avatar?.url ?? user?.photoURL}
                    ></Avatar>
                    <div>
                        <h4 className="font-semibold text-base text-[#292929] leading-sm">
                            {user.name}
                        </h4>
                        <p className="mt-1 text-sm text-[#757575] leading-sm">
                            @
                            {slugify(user.username ?? user.name ?? '', {
                                locale: 'vi',
                                lower: true,
                                strict: true,
                            })}
                        </p>
                    </div>
                </header>

                <UserActionsPopupMenu menu={actionsMenu} />
                <UserActionsPopupMenu menu={menuProfile} />
            </div>
        </Popup>
    );
};

export default UserActionsPopup;
