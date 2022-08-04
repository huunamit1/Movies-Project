import { Link } from 'react-router-dom';
import { useLocationTV } from '~/hooks';

const EpisodeItem = ({ children, isActive }) => {
    const { pathname, seasons, id } = useLocationTV();

    return (
        <Link
            to={`${pathname}?id=${id}&seasons=${seasons}&episode=${children}`}
            className={`${
                isActive ? 'text-primary' : ''
            } cursor-pointer rounded-[5px] flex items-center justify-center h-[50px] bg-slate-300 font-medium text-sm transition-all hover:text-primary`}
        >
            {children}
        </Link>
    );
};

export default EpisodeItem;
