import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '~/components/Icons';

const MovieSeeDetails = ({ to }) => {
    return (
        <Link
            className="whitespace-nowrap group flex items-center font-semibold text-[15px] text-primary leading-sm"
            to={to}
        >
            <span className="group-hover:underline">See details</span>
            <ChevronRightIcon className="w-4 h-4 ml-1 font-bold group-hover:translate-x-1 ease-linear duration-300" />
        </Link>
    );
};

export default MovieSeeDetails;
