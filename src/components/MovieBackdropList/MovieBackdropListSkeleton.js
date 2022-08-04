import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import { useWindowDimensions } from '~/hooks';
import MovieBackdropItemSkeleton from './MovieBackdropItemSkeleton';

const MovieBackdropListSkeleton = ({ className }) => {
    const { width } = useWindowDimensions();
    const countItem = width >= 1024 ? 4 : width >= 640 ? 3 : 2;

    return (
        <>
            <div className={className}>
                <Skeleton
                    containerClassName="inline-block w-[180px] mb-2"
                    className="text-2xl"
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] lg:gap-5">
                    {new Array(countItem).fill(null).map(() => (
                        <MovieBackdropItemSkeleton key={v4()} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MovieBackdropListSkeleton;
