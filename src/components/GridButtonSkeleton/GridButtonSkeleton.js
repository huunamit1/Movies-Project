import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

const GridButtonSkeleton = () => {
    return (
        <div className="mt-12">
            <Skeleton
                containerClassName="flex w-[110px]"
                className="text-[25px] !leading-[1.2]"
            />
            <div className="mt-[25px] grid grid-cols-4 lg:grid-cols-6 gap-x-[30px] gap-y-[15px]">
                {new Array(18).fill(null).map(() => (
                    <Skeleton key={v4()} className="h-[50px]" />
                ))}
            </div>
        </div>
    );
};

export default GridButtonSkeleton;
