import Skeleton from 'react-loading-skeleton';

const ItemSkeleton = () => {
    return (
        <div>
            <Skeleton
                containerClassName="flex aspect-video"
                className="block h-full"
            />
            <Skeleton
                containerClassName="w-full my-2 inline-block"
                className="!leading-6"
            />
        </div>
    );
};

export default ItemSkeleton;
