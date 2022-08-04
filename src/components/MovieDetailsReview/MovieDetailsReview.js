import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Avatar from '~/components/Avatar';
import MovieDetailsReviewActions from '~/components/MovieDetailsReviewActions';
import config from '~/config';
import getDMY from '~/utils/getDMY';

// TODO See comment details

const MovieDetailsReview = ({ data, className = '' }) => {
    const avatar = useMemo(() => {
        if (data?.author_details?.avatar_path) {
            if (data?.author_details?.avatar_path.startsWith('/https'))
                return data?.author_details?.avatar_path.slice(1);
            return `${config.movieDB.image}${data?.author_details?.avatar_path}`;
        }
        return '/no-avatar.png';
    }, [data?.author_details?.avatar_path]);

    return (
        <div className={className + 'flex gap-6 mb-6'}>
            <Avatar
                className="flex-shrink-0 w-10 h-10"
                alt={data?.author_details?.username}
                src={avatar}
            />
            <div>
                <div className="mb-2 flex items-end">
                    <h3 className="mr-2 font-medium text-sm leading-[1.35]">
                        {data?.author_details?.username}
                    </h3>
                    <span className="text-xs text-stone-700 leading-[1.35]">
                        {getDMY(new Date(data?.updated_at || data?.created_at))}
                    </span>
                </div>
                <p className="mb-2 text-sm leading-[1.35] line-clamp-3 break-all">
                    {data?.content}
                </p>

                <MovieDetailsReviewActions />
            </div>
        </div>
    );
};
MovieDetailsReview.propTypes = {
    className: PropTypes.string,
};

export default MovieDetailsReview;
