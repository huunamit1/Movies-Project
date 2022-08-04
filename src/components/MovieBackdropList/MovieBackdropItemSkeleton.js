import Skeleton from 'react-loading-skeleton';

const MovieBackdropItemSkeleton = () => {
    return (
        <div className="pb-5 select-none">
            <Skeleton
                containerClassName="flex"
                className="aspect-video !rounded"
            />
            <div>
                <Skeleton
                    containerClassName="flex"
                    className="inline-block !leading-6 mt-[15px] mb-[5px]"
                />
            </div>
        </div>
    );
};

export default MovieBackdropItemSkeleton;
