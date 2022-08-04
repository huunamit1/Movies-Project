import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import { MovieDetailsReviewSkeleton } from '~/components/MovieDetailsReview';

const MovieDetailsReviewsSkeleton = ({ className = '' }) => {
    return (
        <div className={className + ' mt-12'}>
            <Skeleton
                containerClassName="flex w-[95px]"
                className="mb-4 !leading-6"
            />

            <div className="w-full md:w-9/12 p-6 bg-slate-200 rounded">
                <div className="flex flex-wrap gap-[15px] justify-between items-center">
                    <Skeleton
                        baseColor="#999"
                        containerClassName="w-full xs:w-1/4"
                        className="text-sm !leading-snug"
                    />
                    <div className="w-full xs:flex-1 flex xs:justify-end items-center">
                        <Skeleton
                            baseColor="#999"
                            width="95px"
                            className="text-sm !leading-snug mr-4"
                        />
                        <Skeleton
                            baseColor="#999"
                            width="144px"
                            height="36px"
                            className="!rounded-full"
                        />
                    </div>
                </div>
                <div className="mt-6 mb-8 flex items-center gap-6">
                    <Skeleton
                        containerClassName="block w-10"
                        baseColor="#999"
                        className="h-10 !rounded-full"
                    />
                    <Skeleton
                        containerClassName="flex-1 text-[#9b9b9b] rounded-3xl"
                        baseColor="#999"
                        className="h-12 !rounded-full"
                    />
                </div>

                <div>
                    {new Array(3).fill(null).map(() => (
                        <MovieDetailsReviewSkeleton key={v4()} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsReviewsSkeleton;
