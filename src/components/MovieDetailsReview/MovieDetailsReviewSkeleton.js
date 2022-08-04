import Skeleton from 'react-loading-skeleton';
import { MovieDetailsReviewActionsSkeleton } from '~/components/MovieDetailsReviewActions';

const MovieDetailsReviewSkeleton = ({ className = '' }) => {
    return (
        <div className={className + 'flex gap-6 mb-6'}>
            <Skeleton
                baseColor="#999"
                containerClassName="w-10"
                className="!rounded-full h-10"
            />
            <div className="flex-1">
                <div className="mb-2 flex items-end">
                    <Skeleton
                        baseColor="#999"
                        containerClassName="mr-2 w-[70px]"
                        className="text-sm !leading-[1.35]"
                    />
                    <Skeleton
                        baseColor="#999"
                        containerClassName="w-[70px]"
                        className="text-xs !leading-[1.35]"
                    />
                </div>
                <Skeleton
                    baseColor="#999"
                    containerClassName="mb-2"
                    className="text-sm !leading-[1.35]"
                    count={3}
                />

                <MovieDetailsReviewActionsSkeleton />
            </div>
        </div>
    );
};

export default MovieDetailsReviewSkeleton;
