import Skeleton from 'react-loading-skeleton';

const MovieItemInImgSkeleton = () => {
    return (
        <Skeleton
            containerClassName="mb-5 mx-2 aspect-[2/3] block"
            className="!rounded-2xl h-full"
        />
    );
};

export default MovieItemInImgSkeleton;
