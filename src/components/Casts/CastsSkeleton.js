import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import CastSkeleton from './CastSkeleton';

const CastsSkeleton = () => {
    return (
        <div>
            <Skeleton
                containerClassName="mb-6 w-[65px] inline-block"
                className="text-[22px] leading-tight"
            />
            <div className="flex gap-[10px]">
                {new Array(7).fill(null).map(() => (
                    <CastSkeleton key={v4()} />
                ))}
            </div>
        </div>
    );
};

export default memo(CastsSkeleton);
