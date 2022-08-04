import Skeleton from 'react-loading-skeleton';
import { CommentIcon, FlagIcon, LikeIcon } from '~/components/Icons';

const MovieDetailsReviewActionsSkeleton = () => {
    return (
        <div className="flex items-center">
            <div className="mr-4 text-[#9b9b9b] flex items-center">
                <LikeIcon />
                <Skeleton
                    baseColor="#999"
                    containerClassName="ml-1 w-4 inline-block"
                    className=""
                />
            </div>
            <div className="mr-4 text-[#9b9b9b] flex items-center">
                <CommentIcon />
                <Skeleton
                    baseColor="#999"
                    containerClassName="ml-1 w-4 inline-block"
                    className=""
                />
            </div>
            <div className="mr-4 text-[#9b9b9b] flex">
                <FlagIcon />
            </div>
        </div>
    );
};

export default MovieDetailsReviewActionsSkeleton;
