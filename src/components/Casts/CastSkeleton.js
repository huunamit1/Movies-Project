import Skeleton from 'react-loading-skeleton';

const CastSkeleton = () => {
    return (
        <div className="flex-shrink-0 inline-block mr-0 w-[140px] select-none">
            <Skeleton className="h-[140px] !rounded-full" />
            <h4 className="py-[15px] font-medium text-base text-center">
                <Skeleton />
            </h4>
        </div>
    );
};

export default CastSkeleton;
