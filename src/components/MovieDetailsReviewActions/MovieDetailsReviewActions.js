import { CommentIcon, FlagIcon, LikeIcon } from '~/components/Icons';

const MovieDetailsReviewActions = () => {
    return (
        <div className="flex items-center">
            <div className="mr-4 text-[#9b9b9b] flex items-center">
                <LikeIcon />
                <span className="ml-1">0</span>
            </div>
            <div className="mr-4 text-[#9b9b9b] flex items-center">
                <CommentIcon />
                <span className="ml-1">0</span>
            </div>
            <div className="mr-4 text-[#9b9b9b] flex">
                <FlagIcon />
            </div>
        </div>
    );
};

export default MovieDetailsReviewActions;
