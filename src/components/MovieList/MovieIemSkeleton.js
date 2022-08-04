import Skeleton from 'react-loading-skeleton';

const MovieIemSkeleton = () => {
    return (
        <div>
            <Skeleton
                containerClassName="flex"
                className="aspect-[2/3] !block"
                borderRadius="16px"
            />
            <div>
                <h3 className="block my-[0.625em] leading-[1.4] text-base">
                    <Skeleton
                        containerClassName="flex"
                        className="h-[22.4px]"
                    />
                </h3>
            </div>
        </div>
    );
};

export default MovieIemSkeleton;
