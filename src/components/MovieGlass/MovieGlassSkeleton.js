import Skeleton from 'react-loading-skeleton';

const MovieGlassSkeleton = () => {
    return (
        <Skeleton
            containerClassName="flex"
            className="aspect-video !rounded-lg"
        />
    );
};

export default MovieGlassSkeleton;
