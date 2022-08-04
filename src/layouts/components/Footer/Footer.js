import { memo } from 'react';
import {
    EmailIcon,
    ExpressIcon,
    GithubIcon,
    HerokuIcon,
    MongoDBIcon,
    NodeIcon,
    ReactIcon,
    UserSolidIcon,
    VercelIcon,
} from '~/components/Icons';
import Logo from '~/components/Logo';
import { useWindowDimensions } from '~/hooks';
import FooterCol from './FooterCol';

const frameworkMenu = [
    {
        title: 'MongoDB',
        icon: MongoDBIcon,
    },
    {
        title: 'ExpressJS',
        icon: ExpressIcon,
    },
    {
        title: 'ReactJS',
        icon: ReactIcon,
    },
    {
        title: 'NodeJS',
        icon: NodeIcon,
    },
];

const repositoriesMenu = [
    {
        title: 'Github',
        icon: GithubIcon,
    },
];

const deployMenu = [
    {
        title: 'Vercel (Frontend)',
        icon: VercelIcon,
    },
    {
        title: 'Heroku (Backend)',
        icon: HerokuIcon,
    },
];

const profileMenu = [
    {
        title: 'Full name',
        icon: UserSolidIcon,
    },
    {
        title: 'Email',
        icon: EmailIcon,
    },
];

const Footer = () => {
    const { width } = useWindowDimensions();
    const isMinLg = width >= 1024;

    return (
        <div className="bg-[#181821] flex">
            {isMinLg && <div className="w-[var(--navbar-width)]"></div>}
            <div className="flex-1 pt-[68px] pb-10 px-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] w-full mx-auto">
                <div>
                    <Logo textColor="white" />
                    <FooterCol iconColor="fill-white" menu={profileMenu} />
                </div>
                <FooterCol menu={frameworkMenu}>Framework</FooterCol>
                <FooterCol menu={repositoriesMenu}>Repositories</FooterCol>
                <FooterCol menu={deployMenu}>Deploy</FooterCol>
            </div>
        </div>
    );
};

export default memo(Footer);
