import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import Avatar from '~/components/Avatar';
import EditInformationButton from '~/components/Button/EditInformationButton';
import {
    CalendarIcon,
    EmailIcon,
    LockIcon,
    UserSolidIcon,
    UsersSolidIcon,
} from '~/components/Icons';
import PersonalInformationItem from '~/components/PersonalInformationItem';
import RequestLogin from '~/components/RequestLogin';
import useAuth from '~/context/Auth';
import { useBackToTop, useWindowDimensions } from '~/hooks';

const personalInformation = [
    {
        title: 'Full name',
        icon: UserSolidIcon,
        attribute: 'name',
    },
    {
        title: 'E-mail',
        icon: EmailIcon,
        attribute: 'email',
    },
    {
        title: 'Birthday',
        icon: CalendarIcon,
        attribute: 'birthday',
    },
    {
        title: 'Gender',
        icon: UsersSolidIcon,
        attribute: 'gender',
    },
    {
        title: 'Password',
        icon: LockIcon,
        attribute: 'password',
    },
];

const PersonalInformation = () => {
    const { user, loading } = useAuth();
    const { width } = useWindowDimensions();
    const isMinSm = width >= 640;

    useBackToTop();

    if (!loading && !user) return <RequestLogin />;

    return (
        <div className="relative p-[10px] pt-[35px]">
            {(loading && (
                <>
                    {isMinSm && (
                        <Skeleton
                            containerClassName="!absolute right-0 block w-[186px]"
                            className="h-11 !rounded-lg"
                        />
                    )}
                    <div>
                        <Skeleton
                            containerClassName="w-[100px] block mx-auto"
                            className="h-[100px] !rounded-full"
                        />
                        <Skeleton
                            containerClassName="flex mt-4 w-[220px] mx-auto"
                            className="text-[26px] !leading-[1.2]"
                        />
                    </div>
                    <div className="mt-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        {new Array(5).fill(5).map(() => (
                            <Skeleton
                                key={v4()}
                                className="h-[78px] !rounded-[10px]"
                            />
                        ))}
                    </div>
                    {!isMinSm && (
                        <Skeleton
                            containerClassName="z-5 sticky bottom-0 mt-[15px] p-3 bg-slate-100 flex justify-center"
                            className="!w-[205px] h-11 !rounded-lg"
                        />
                    )}
                </>
            )) || (
                <>
                    {isMinSm && (
                        <EditInformationButton className="!absolute right-0" />
                    )}
                    <div>
                        <Avatar
                            className="w-[100px] h-[100px] mx-auto"
                            src={user?.avatar?.url ?? user?.photoURL}
                            alt=""
                        ></Avatar>
                        <h1 className="mt-4 font-bold text-[26px] text-center leading-[1.2]">
                            {user?.name}
                        </h1>
                    </div>
                    <div className="mt-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        {personalInformation.map((item) => (
                            <PersonalInformationItem
                                key={v4()}
                                icon={item.icon}
                            >
                                <PersonalInformationItem.Title>
                                    {item.title}
                                </PersonalInformationItem.Title>
                                <PersonalInformationItem.Description>
                                    {(item.attribute === 'gender' &&
                                        typeof user?.[item.attribute] ===
                                            'boolean' &&
                                        (user?.[item.attribute]
                                            ? 'Male'
                                            : 'Female')) ||
                                        user?.[item.attribute]}
                                </PersonalInformationItem.Description>
                            </PersonalInformationItem>
                        ))}
                    </div>
                    {!isMinSm && (
                        <div className="sticky bottom-0 mt-[15px] p-3 bg-slate-100 flex justify-center">
                            <EditInformationButton className="w-fit" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PersonalInformation;
